import { z } from "zod";

export const TmdbGenreSchema = z.object({
    id: z.number(),
    name: z.string()
});
export type TmdbGenre = z.infer<typeof TmdbGenreSchema>;
