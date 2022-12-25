import { z } from "zod";

import { LanguageCodeSchema } from "@/schema/types/localization/language";
import { TmdbGenreSchema } from "@/schema/types/tmdb/models/TmdbGenre";

export const TmdbGetGenresArgsSchema = z.object({
    language: LanguageCodeSchema.default("en-US")
});
export const TmdbGetGenresResponseSchema = z.object({
    genres: z.array(TmdbGenreSchema)
});

export type TmdbGetGenresArgs = z.infer<typeof TmdbGetGenresArgsSchema>;
export type TmdbGetGenresResponse = z.infer<typeof TmdbGetGenresResponseSchema>;
