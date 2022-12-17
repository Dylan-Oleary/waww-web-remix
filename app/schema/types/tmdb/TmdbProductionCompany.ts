import { z } from "zod";

export const TmdbProductionCompanySchema = z.object({
    id: z.number(),
    name: z.string(),
    logo_path: z.string().nullable(),
    origin_country: z.string()
});

export type TmdbProductionCompany = z.infer<typeof TmdbProductionCompanySchema>;
