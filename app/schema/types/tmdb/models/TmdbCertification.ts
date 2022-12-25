import { z } from "zod";

export const TmdbCertificationSchema = z.object({
    certification: z.string(),
    meaning: z.string(),
    order: z.number().int()
});
export const TmdbCertificationCountryEnumSchema = z.enum(["CA", "CA-QC", "US"]);

export type TmdbCertification = z.infer<typeof TmdbCertificationSchema>;
export type TmdbCertificationCountryEnum = z.infer<typeof TmdbCertificationCountryEnumSchema>;
