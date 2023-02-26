import { z } from "zod";

/**
 * @see https://day.js.org/docs/en/display/format#docsNav
 */
export const DayJsDateFormatEnumSchema = z.enum(["MMM DD, YYYY", "YYYY", "YYYY-MM-DD"]);
export type DayJsDateFormatEnum = z.infer<typeof DayJsDateFormatEnumSchema>;
