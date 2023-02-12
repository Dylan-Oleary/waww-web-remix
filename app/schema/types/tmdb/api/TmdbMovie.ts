import { z } from "zod";

import { TmdbAppendToResponseSchema } from "./TmdbAppendToResponse";

export const TmdbGetMovieByIdArgsSchema = TmdbAppendToResponseSchema.extend({});
export type TmdbGetMovieByIdArgs = z.infer<typeof TmdbGetMovieByIdArgsSchema>;
