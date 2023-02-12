import { z } from "zod";

import { TmdbCastMemberSchema } from "./TmdbCastMember";
import { TmdbCollectionSchema } from "./TmdbCollection";
import { TmdbCrewMemberSchema } from "./TmdbCrewMember";
import { TmdbGenreSchema } from "./TmdbGenre";
import { TmdbMediaVideoSchema } from "./TmdbMediaVideo";
import { TmdbProductionCompanySchema } from "./TmdbProductionCompany";
import { TmdbProductionCountrySchema } from "./TmdbProductionCountry";
import { TmdbSpokenLanguageSchema } from "./TmdbSpokenLanguage";
import { TmdbStatusEnumSchema } from "./TmdbStatus";

export const TmdbMovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    belongs_to_collection: TmdbCollectionSchema.nullable(),
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
    revenue: z.number().optional(),
    runtime: z.number().optional(),
    spoken_languages: z.array(TmdbSpokenLanguageSchema),
    status: TmdbStatusEnumSchema,
    tagline: z.string().nullable(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number()
});
export const TmdbMovieExtendedSchema = TmdbMovieSchema.extend({
    credits: z
        .object({
            cast: z.array(TmdbCastMemberSchema).optional(),
            crew: z.array(TmdbCrewMemberSchema).optional()
        })
        .optional(),
    recommendations: z
        .object({
            page: z.number().nonnegative().optional(),
            results: z
                .array(
                    TmdbMovieSchema.pick({
                        id: true,
                        adult: true,
                        backdrop_path: true,
                        title: true,
                        original_language: true,
                        original_title: true,
                        overview: true,
                        poster_path: true,
                        popularity: true,
                        release_date: true,
                        video: true,
                        vote_average: true,
                        vote_count: true
                    }).extend({
                        genre_ids: z.array(z.number()).optional(),
                        media_type: z.string().optional()
                    })
                )
                .optional()
        })
        .optional(),
    videos: z.object({ results: z.array(TmdbMediaVideoSchema).optional() }).optional()
});
export type TmdbMovie = z.infer<typeof TmdbMovieSchema>;
export type TmdbMovieExtended = z.infer<typeof TmdbMovieExtendedSchema>;
