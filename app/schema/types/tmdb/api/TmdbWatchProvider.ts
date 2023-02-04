import { z } from "zod";

import { LanguageCodeSchema } from "@/schema/types/localization/language";
import { ISO_3166_1_Schema } from "@/schema/types/localization/region";
import { TmdbWatchProviderSchema } from "@/schema/types/tmdb/models/TmdbWatchProvider";

export const TmdbGetWatchProvidersArgsSchema = z.object({
    language: LanguageCodeSchema.default("en-US"),
    watch_region: ISO_3166_1_Schema.optional()
});
export const TmdbGetWatchProvidersResponseSchema = z.object({
    results: z.array(TmdbWatchProviderSchema)
});

export type TmdbGetWatchProvidersArgs = z.infer<typeof TmdbGetWatchProvidersArgsSchema>;
export type TmdbGetWatchProvidersResponse = z.infer<typeof TmdbGetWatchProvidersResponseSchema>;
