import { z } from "zod";

export const ISO_3166_1_Schema = z.string().regex(/^[A-Z]{2}$/);
export type ISO_3166_1 = z.infer<typeof ISO_3166_1_Schema>;
