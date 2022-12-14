import { z } from "zod";

export const TmdbCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    poster_path: z.null(),
    backdrop_path: z.string(),
    parts: z.array(
        z.object({
            adult: z.boolean(),
            backdrop_path: z.string().nullable(),
            genre_ids: z.array(z.number()),
            id: z.number(),
            original_language: z.string(),
            original_title: z.string(),
            overview: z.string().nullable(),
            popularity: z.number(),
            poster_path: z.string().nullable(),
            title: z.string(),
            video: z.boolean(),
            vote_average: z.number(),
            vote_count: z.number()
        })
    )
});

export type TmdbCollection = z.infer<typeof TmdbCollectionSchema>;
