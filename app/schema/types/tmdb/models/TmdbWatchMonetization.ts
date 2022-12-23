import { z } from "zod";

export const TmdbWatchMonetizationSchema = z.enum(["flatrate", "free", "ads", "rent", "buy"]);
export type TmdbWatchMonetization = z.infer<typeof TmdbWatchMonetizationSchema>;
