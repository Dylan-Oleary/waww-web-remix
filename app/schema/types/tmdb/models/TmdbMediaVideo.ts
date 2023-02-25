import { z } from "zod";

import { ISO_3166_1_Schema } from "../../localization";

export const TmdbMediaVideoTypeEnumSchema = z.enum([
    "Behind the Scenes",
    "Clip",
    "Featurette",
    "Teaser",
    "Trailer"
]);
export const TmdbMediaVideoSchema = z.object({
    id: z.string(),
    iso_3166_1: ISO_3166_1_Schema,
    iso_639_1: z.string(),
    key: z.string(),
    name: z.string(),
    official: z.boolean(),
    published_at: z.string(),
    site: z.string(),
    size: z.number(),
    type: TmdbMediaVideoTypeEnumSchema
});
export type TmdbMediaVideoTypeEnum = z.infer<typeof TmdbMediaVideoTypeEnumSchema>;
export type TmdbMediaVideo = z.infer<typeof TmdbMediaVideoSchema>;
