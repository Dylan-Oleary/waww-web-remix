import { AnyZodObject } from "zod";

import { TmdbBaseQueryParamsSchema } from "@/schema";

export const withTmdbApiKey = <T extends AnyZodObject>(schema: T) =>
    TmdbBaseQueryParamsSchema.merge(schema);
