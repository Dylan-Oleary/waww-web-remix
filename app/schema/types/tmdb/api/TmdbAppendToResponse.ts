import { z } from "zod";

//TODO - Regex this
export const TmdbAppendToResponseSchema = z.object({
    append_to_response: z.string().optional()
});
export type TmdbAppendToResponse = z.infer<typeof TmdbAppendToResponseSchema>;
