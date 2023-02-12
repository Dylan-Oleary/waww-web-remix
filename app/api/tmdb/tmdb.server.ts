import {
    TmdbCertification,
    TmdbDiscoverMoviesArgs,
    TmdbDiscoverMoviesParamsSchema,
    TmdbDiscoverMoviesResponse,
    TmdbDiscoverMoviesResultRecord,
    TmdbGetCertificationArgs,
    TmdbGetCertificationArgsSchema,
    TmdbGetGenresArgs,
    TmdbGetGenresArgsSchema,
    TmdbGetGenresResponse,
    TmdbGetMovieByIdArgs,
    TmdbGetMovieByIdArgsSchema,
    TmdbGetWatchProvidersArgs,
    TmdbGetWatchProvidersArgsSchema,
    TmdbGetWatchProvidersResponse,
    TmdbMediumEnum,
    TmdbMovieExtended,
    TmdbRandomMovieArgs,
    TmdbRandomMovieArgsSchema,
    TmdbRandomMovieResponse,
    TmdbSortByEnum,
    TmdbSortByEnumSchema,
    withTmdbApiKey
} from "@/schema";
import {
    convertObjectToUrlSearchParams,
    getRandomKeyValuePairFromObject,
    getRandomNumberWithinRange,
    shuffleArray
} from "@/utils";

import { tmdbCertificationData, tmdbGenreData, tmdbWatchProviderData } from "./stub.server";

const API_KEY = process?.env?.TMDB_API_KEY;
const BASE_ASSET_URL = process?.env?.TMDB_BASE_ASSET_URL;
const BASE_URL = process?.env?.TMDB_V3_API_URL;
const BASE_URL_PARAMS = { api_key: API_KEY ?? "" };

export const tmdbApi = {
    /**
     * Fetches movies based off of passed filter params
     *
     * @param params Filter params used to discover movies
     * @see https://developers.themoviedb.org/3/discover/movie-discover
     */
    async discoverMovies(params: TmdbDiscoverMoviesArgs): Promise<TmdbDiscoverMoviesResponse> {
        const mergedParams = withTmdbApiKey(TmdbDiscoverMoviesParamsSchema).parse({
            ...BASE_URL_PARAMS,
            ...params
        });

        return fetch(
            `${BASE_URL}/discover/movie?${convertObjectToUrlSearchParams(mergedParams)}`
        ).then((res) => res.json());
    },
    /**
     * Fetches a list of media certifications based fo the passed country
     *
     * @param params Parameters to fetch the desired certifications
     * @param medium The medium of the content
     * @see https://developers.themoviedb.org/3/certifications/get-movie-certifications
     * @see https://developers.themoviedb.org/3/certifications/get-tv-certifications
     */
    async getCertifications(
        params: TmdbGetCertificationArgs,
        medium: TmdbMediumEnum = "movie",
        options: { sortBy?: "asc" | "desc" } = {}
    ): Promise<TmdbCertification[]> {
        const validatedParams = TmdbGetCertificationArgsSchema.parse(params);
        const { sortBy = "asc" } = options;

        return new Promise((resolve) =>
            resolve(
                tmdbCertificationData[validatedParams.country].sort((a, b) =>
                    sortBy === "asc" ? a.order - b.order : b.order - a.order
                )
            )
        );
        // TODO - Enable API fetch
        // return fetch(
        //     `${BASE_URL}/certification/${medium}/list?${new URLSearchParams(BASE_URL_PARAMS)}`
        // )
        //     .then((res) => res.json())
        //     .then(({ certifications = {} }) =>
        //         (certifications[validatedParams?.country] ?? []).sort((a, b) =>
        //             sortBy === "asc" ? a.order - b.order : b.order - a.order
        //         )
        //     );
    },
    /**
     * Fetches a list of all genres present in the TMDB system
     *
     * @param params Parameters to fetch the desired genres
     * @param medium The medium of the content
     * @see https://developers.themoviedb.org/3/genres/get-tv-list
     * @see https://developers.themoviedb.org/3/genres/get-movie-list
     */
    async getGenres(
        params?: TmdbGetGenresArgs,
        medium: TmdbMediumEnum = "movie"
    ): Promise<TmdbGetGenresResponse> {
        const mergedParams = withTmdbApiKey(TmdbGetGenresArgsSchema).parse({
            ...BASE_URL_PARAMS,
            ...params
        });

        return new Promise((resolve) => resolve(tmdbGenreData));

        //TODO - Enable API fetch
        // return fetch(
        //     `${BASE_URL}/genre/${medium}/list?${convertObjectToUrlSearchParams(mergedParams)}`
        // ).then((res) => res.json());
    },
    /**
     * Fetches a movie details by its id
     *
     * @param id The id used to lookup the movie
     * @see https://developers.themoviedb.org/3/movies/get-movie-details
     */
    async getMovieById(id: string, params: TmdbGetMovieByIdArgs = {}): Promise<TmdbMovieExtended> {
        const mergedParams = withTmdbApiKey(TmdbGetMovieByIdArgsSchema).parse({
            ...BASE_URL_PARAMS,
            ...params
        });

        return fetch(
            `${BASE_URL}/movie/${id}?${convertObjectToUrlSearchParams(mergedParams)}`
        ).then((res) => res.json());
    },
    /**
     * Fetches a random list of movies based on the passed filter params
     *
     * @param params Filter parameters used to fetch movies
     */
    async getRandomMovies(params: TmdbRandomMovieArgs): Promise<TmdbRandomMovieResponse> {
        const validRandomMovieArgs = TmdbRandomMovieArgsSchema.parse(params);
        const [_, sort_by] = getRandomKeyValuePairFromObject(TmdbSortByEnumSchema.Values) as [
            string,
            TmdbSortByEnum
        ];
        const discoverMovieArgs = TmdbDiscoverMoviesParamsSchema.parse({
            ...validRandomMovieArgs,
            page: getRandomNumberWithinRange(1, 150),
            sort_by
        });

        let data = await this.discoverMovies(discoverMovieArgs);
        const { results = [], total_pages = 0, total_results = 0 } = data;

        // Retry if results exist but the page requested did not exist
        if (results?.length === 0 && total_pages > 0 && total_results > 0) {
            discoverMovieArgs.page =
                total_pages === 1 ? total_pages : getRandomNumberWithinRange(1, total_pages);
            data = await this.discoverMovies(discoverMovieArgs);
        }

        return {
            results: shuffleArray<TmdbDiscoverMoviesResultRecord>(data?.results ?? []).slice(
                0,
                validRandomMovieArgs.number_of_items
            )
        };
    },
    /**
     * Fetches a list of watch (streaming/purchase/rent) providers
     *
     * @param params Parameters to filter providers by
     * @param medium The medium of the content
     * @see https://developers.themoviedb.org/3/watch-providers/get-movie-providers
     * @see https://developers.themoviedb.org/3/watch-providers/get-tv-providers
     */
    async getWatchProviders(
        params?: TmdbGetWatchProvidersArgs,
        medium: TmdbMediumEnum = "movie"
    ): Promise<TmdbGetWatchProvidersResponse> {
        const mergedParams = withTmdbApiKey(TmdbGetWatchProvidersArgsSchema).parse({
            ...BASE_URL_PARAMS,
            ...params
        });

        return new Promise((resolve) => resolve(tmdbWatchProviderData));

        //TODO - Enable API fetch
        // const { results = [] }: TmdbGetWatchProvidersResponse = await fetch(
        //     `${BASE_URL}/watch/providers/${medium}?${convertObjectToUrlSearchParams(mergedParams)}`
        // ).then((res) => res.json());

        // return {
        //     results: results
        //         .sort((a, b) => a.provider_name.localeCompare(b.provider_name))
        //         .map(({ display_priority, logo_path, provider_id, provider_name }) => ({
        //             display_priority,
        //             logo_path: `${BASE_ASSET_URL}${logo_path}`,
        //             provider_id,
        //             provider_name
        //         }))
        // };
    }
};
