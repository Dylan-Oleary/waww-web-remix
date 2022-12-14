import { z } from "zod";

export const TmdbStatusEnumSchema = z.enum([
    "Rumored",
    "Planned",
    "In Production",
    "Post Production",
    "Released",
    "Canceled"
]);

export type TmdbStatusEnum = z.infer<typeof TmdbStatusEnumSchema>;
