import { json } from "@remix-run/node";

import { tmdbApi } from "@/api";
import { DiscoverMoviesFormDataSchema, DiscoverMoviesFormSchemaConfig } from "@/forms";
import { TmdbDiscoverMoviesParamsSchema } from "@/schema";
import { buildPagination, convertScoreToVoteAverage, convertUrlParamsToJSON } from "@/utils";

import type { LoaderArgs } from "@remix-run/node";
import type { ZodError, ZodIssue } from "zod";

import type { DiscoverMoviesFormData } from "@/forms";
import type {
    TmdbCertification,
    TmdbDiscoverMoviesResponse,
    TmdbGenre,
    TmdbWatchProvider,
    TmdbDiscoverMoviesParams
} from "@/schema";
import type { PaginationData } from "@/types";

type LoaderError = {
    status?: 400 | 404;
};

export type MoviesRouteLoaderData = {
    certifications?: TmdbCertification[];
    error?: LoaderError;
    formData: DiscoverMoviesFormData;
    genres: TmdbGenre[];
    pagination?: PaginationData;
    tmdbResponse?: TmdbDiscoverMoviesResponse;
    watchProviders: TmdbWatchProvider[];
};

export const moviesRouteLoader = async ({ request }: LoaderArgs) => {
    return Promise.allSettled([
        tmdbApi.getGenres(),
        tmdbApi.getWatchProviders({ language: "en-US", watch_region: "CA" }),
        tmdbApi.getCertifications({ country: "CA" })
    ]).then(async ([genresResult, watchProvidersResult, certificationsResult]) => {
        const genres: TmdbGenre[] =
            genresResult?.status === "fulfilled" ? genresResult?.value?.genres : [];
        const watchProviders: TmdbWatchProvider[] =
            watchProvidersResult?.status === "fulfilled"
                ? watchProvidersResult?.value?.results
                : [];
        const certifications: TmdbCertification[] =
            certificationsResult?.status === "fulfilled" ? certificationsResult?.value : [];

        const { error: formDataError, formData } = mapQueryParamsToDiscoverMoviesFormData(request, {
            certifications,
            genres,
            watchProviders
        });

        if (formDataError) {
            return json({
                certifications,
                error: { status: 400 },
                formData,
                genres,
                watchProviders
            });
        }

        const page = formData["page"];

        if (page > 500) {
            return json({
                certifications,
                formData,
                genres,
                tmdbResponse: { page, results: [] },
                watchProviders
            });
        }

        const tmdbArgs: Partial<TmdbDiscoverMoviesParams> = {
            page,
            include_adult: !!formData["include_adult"],
            // Runtime is broken on Tmdb
            // "with_runtime.gte": formData["with_runtime.lte_from"],
            // "with_runtime.lte": formData["with_runtime.lte_to"],
            "vote_average.gte": convertScoreToVoteAverage(formData["vote_average.gte"]),
            "vote_count.gte": 30
        };

        if (formData.certifications?.length > 0) {
            tmdbArgs["certification"] = formData["certifications"].join("|");
            //TODO - Implement locale
            tmdbArgs["certification_country"] = "CA";
        }

        if (formData.with_genres?.length > 0) {
            tmdbArgs["with_genres"] = formData["with_genres"].join("|");
        }

        if (formData.with_watch_providers?.length > 0) {
            tmdbArgs["with_watch_providers"] = formData["with_watch_providers"].join("|");
            //TODO - Implement locale
            tmdbArgs["watch_region"] = "CA";
        }

        const tmdbResponse = await tmdbApi.discoverMovies(
            TmdbDiscoverMoviesParamsSchema.parse(tmdbArgs)
        );

        const pagination = buildPagination({
            page: tmdbResponse?.page,
            // TDMB will not let my API key query for pages > 500 but has results over page 500
            totalPages: tmdbResponse?.total_pages <= 500 ? tmdbResponse?.total_pages : 500,
            numOfResults: tmdbResponse?.total_results
        });

        return json({ certifications, formData, genres, pagination, tmdbResponse, watchProviders });
    });
};

export const mapQueryParamsToDiscoverMoviesFormData = (
    request: Request,
    data: {
        certifications: TmdbCertification[];
        genres: TmdbGenre[];
        watchProviders: TmdbWatchProvider[];
    }
): { error: boolean; formData: DiscoverMoviesFormData } => {
    const { certifications = [], genres = [], watchProviders = [] } = data;
    const queryParams = convertUrlParamsToJSON<DiscoverMoviesFormData>(request.url);
    const queryCertifications =
        (queryParams?.certifications ?? "")
            .split(",")
            .filter((queryId) =>
                certifications.find(({ certification }) => certification === queryId)
            ) ?? [];
    const queryGenres =
        (queryParams?.with_genres ?? "")
            .split(",")
            .filter((queryId) => genres.find(({ id }) => String(id) === queryId)) ?? [];
    const queryWatchProviders =
        (queryParams?.with_watch_providers ?? "")
            .split(",")
            .filter((queryId) =>
                watchProviders.find(({ provider_id }) => String(provider_id) === queryId)
            ) ?? [];
    const validationData = {
        ...queryParams,
        certifications: queryCertifications,
        with_genres: queryGenres,
        with_watch_providers: queryWatchProviders
    };

    try {
        return {
            error: false,
            formData: DiscoverMoviesFormDataSchema.parse(validationData)
        };
    } catch (e) {
        const issues: ZodIssue[] = (e as ZodError).issues ?? [];

        // Fill invalid fields with default data
        for (const { path } of issues) {
            const fieldName = path[0] as keyof DiscoverMoviesFormData;

            if (fieldName) {
                //@ts-ignore - meh
                validationData[fieldName] = DiscoverMoviesFormSchemaConfig[fieldName].defaultValue;
            }
        }

        return { error: true, formData: DiscoverMoviesFormDataSchema.parse(validationData) };
    }
};
