import { z } from "zod";

export const TmdbConfigurationSchema = z.object({
    change_keys: z.array(z.string()),
    images: z.object({
        backdrop_sizes: z.array(z.string()),
        base_url: z.string(),
        logo_sizes: z.array(z.string()),
        poster_sizes: z.array(z.string()),
        profile_sizes: z.array(z.string()),
        secure_base_url: z.string(),
        still_sizes: z.array(z.string())
    })
});
export type TmdbConfiguration = z.infer<typeof TmdbConfigurationSchema>;
