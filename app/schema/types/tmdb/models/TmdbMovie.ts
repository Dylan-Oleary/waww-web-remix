import { z } from "zod";

import {
    TmdbCollectionSchema,
    TmdbGenreSchema,
    TmdbProductionCompanySchema,
    TmdbProductionCountrySchema,
    TmdbSpokenLanguageSchema,
    TmdbStatusEnumSchema
} from "@/schema";

export const TmdbMovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: TmdbCollectionSchema,
    budget: z.number(),
    genres: z.array(TmdbGenreSchema),
    homepage: z.string().nullable(),
    id: z.number(),
    imdb_id: z
        .string()
        .length(9)
        .regex(/^tt[0-9]{7}/)
        .nullable(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string().nullable(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    production_companies: z.array(TmdbProductionCompanySchema),
    production_countries: z.array(TmdbProductionCountrySchema),
    release_date: z.string(),
    spoken_languages: z.array(TmdbSpokenLanguageSchema),
    status: TmdbStatusEnumSchema,
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number()
});
export type TmdbMovie = z.infer<typeof TmdbMovieSchema>;
