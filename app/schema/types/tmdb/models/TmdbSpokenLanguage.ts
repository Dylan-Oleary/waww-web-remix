import { z } from "zod";

export const TmdbSpokenLanguageSchema = z.object({
    iso_639_1: z.string(),
    name: z.string()
});
export type TmdbSpokenLanguage = z.infer<typeof TmdbSpokenLanguageSchema>;
