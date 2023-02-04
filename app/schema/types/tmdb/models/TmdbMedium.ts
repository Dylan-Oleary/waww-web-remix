import { z } from "zod";

export const TmdbMediumEnumSchema = z.enum(["movie", "tv"]);
export type TmdbMediumEnum = z.infer<typeof TmdbMediumEnumSchema>;
