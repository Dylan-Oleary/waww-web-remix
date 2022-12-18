import { z } from "zod";

export const TmdbBaseQueryParamsSchema = z.object({
    api_key: z.string({ required_error: "TMDB API key is required" })
});
export type TmdbBaseQueryParams = z.infer<typeof TmdbBaseQueryParamsSchema>;
