import { z } from "zod";

export const TmdbWatchProviderSchema = z.object({
    display_priority: z.number(),
    logo_path: z.string(),
    provider_id: z.number(),
    provider_name: z.string()
});
export type TmdbWatchProvider = z.infer<typeof TmdbWatchProviderSchema>;
