import { z } from "zod";

export const TmdbProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string()
});
export type TmdbProductionCountry = z.infer<typeof TmdbProductionCountrySchema>;
