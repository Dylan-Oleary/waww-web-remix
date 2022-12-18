import { z } from "zod";

import { LanguageCodeSchema } from "@/schema/types/localization/language";
import { ISO_3166_1_Schema } from "@/schema/types/localization/region";
import { TmdbSortByEnumSchema } from "@/schema/types/tmdb/api/TmdbSortBy";
import { TmdbMovieSchema } from "@/schema/types/tmdb/models/TmdbMovie";

/**
 * Discover API query parameter schema
 *
 * @see https://developers.themoviedb.org/3/discover/movie-discover
 */
export const TmdbDiscoverMoviesParamsSchema = z.object({
    include_adult: z.boolean().optional().default(false),
    include_video: z.boolean().optional().default(false),
    language: LanguageCodeSchema.default("en-US"),
    page: z.number().min(1).max(500).default(1),
    primary_release_year: z.number().min(1000).max(2999).optional(),
    ["primary_release_year.gte"]: z.string().optional(),
    ["primary_release_year.lte"]: z.string().optional(),
    region: ISO_3166_1_Schema.optional(),
    ["release_date.gte"]: z.string().optional(),
    ["release_date.lte"]: z.string().optional(),
    sort_by: TmdbSortByEnumSchema.default(TmdbSortByEnumSchema.Enum["popularity.desc"]),
    ["vote_average.gte"]: z.number().min(0).optional(),
    ["vote_average.lte"]: z.number().min(0).optional(),
    ["vote_count.gte"]: z.number().min(0).optional(),
    ["vote_count.lte"]: z.number().min(1).optional(),
    watch_region: ISO_3166_1_Schema.optional(),
    with_cast: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    with_companies: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    with_crew: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    with_genres: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    with_keywords: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    with_people: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    ["with_runtime.gte"]: z.number().nonnegative().optional(),
    ["with_runtime.lte"]: z.number().nonnegative().optional(),
    with_watch_providers: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    without_genres: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    without_keywords: z
        .array(z.string())
        .transform((values) => values.map((value) => value?.trim()).join(","))
        .optional(),
    year: z.number().min(1000).max(2999).optional()
});

export const TmdbDiscoverMoviesArgsSchema = TmdbDiscoverMoviesParamsSchema.partial().required({
    page: true
});

export const TmdbRandomMovieArgsSchema = TmdbDiscoverMoviesParamsSchema.partial()
    .omit({
        page: true,
        sort_by: true
    })
    .extend({
        number_of_items: z.number().max(20).default(1)
    });

export const TmdbDiscoverMoviesResultRecordSchema = TmdbMovieSchema.pick({
    id: true,
    adult: true,
    backdrop_path: true,
    original_language: true,
    original_title: true,
    overview: true,
    popularity: true,
    poster_path: true,
    release_date: true,
    title: true,
    video: true,
    vote_average: true,
    vote_count: true
}).extend({
    genre_ids: z.array(z.number())
});

export const TmdbDiscoverMoviesResponseSchema = z.object({
    page: z.number().nonnegative(),
    results: z.array(TmdbDiscoverMoviesResultRecordSchema),
    total_results: z.number().nonnegative(),
    total_pages: z.number().nonnegative()
});

export const TmdbRandomMovieResponseSchema = TmdbDiscoverMoviesResponseSchema.pick({
    results: true
});

export type TmdbDiscoverMoviesParams = z.infer<typeof TmdbDiscoverMoviesParamsSchema>;
export type TmdbDiscoverMoviesArgs = z.infer<typeof TmdbDiscoverMoviesArgsSchema>;
export type TmdbRandomMovieArgs = z.infer<typeof TmdbRandomMovieArgsSchema>;
export type TmdbRandomMovieResponse = z.infer<typeof TmdbRandomMovieResponseSchema>;
export type TmdbDiscoverMoviesResultRecord = z.infer<typeof TmdbDiscoverMoviesResultRecordSchema>;
export type TmdbDiscoverMoviesResponse = z.infer<typeof TmdbDiscoverMoviesResponseSchema>;
