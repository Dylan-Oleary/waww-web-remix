import { z } from "zod";

import {
    TmdbCertificationCountryEnumSchema,
    TmdbCertificationSchema
} from "../models/TmdbCertification";

export const TmdbGetCertificationArgsSchema = z.object({
    country: TmdbCertificationCountryEnumSchema
});
export const TmdbGetCertificationResponseSchema = z.object({
    [TmdbCertificationCountryEnumSchema.Enum.CA]: z.array(TmdbCertificationSchema),
    [TmdbCertificationCountryEnumSchema.Enum["CA-QC"]]: z.array(TmdbCertificationSchema),
    [TmdbCertificationCountryEnumSchema.Enum.US]: z.array(TmdbCertificationSchema)
});
export type TmdbGetCertificationArgs = z.infer<typeof TmdbGetCertificationArgsSchema>;
export type TmdbGetCertificationResponse = z.infer<typeof TmdbGetCertificationResponseSchema>;
