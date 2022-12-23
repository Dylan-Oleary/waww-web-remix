import { z } from "zod";

export const LanguageCodeSchema = z
    .string()
    .min(2)
    .regex(/([a-z]{2})-([A-Z]{2})/);
export type LanguageCode = z.infer<typeof LanguageCodeSchema>;
