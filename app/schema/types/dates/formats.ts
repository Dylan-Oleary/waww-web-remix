import { z } from "zod";

/**
 * @see https://day.js.org/docs/en/display/format#docsNav
 */
export const DayJsDateFormatEnumSchema = z.enum(["MMM DD, YYYY", "YYYY"]);
export type DayJsDateFormatEnum = z.infer<typeof DayJsDateFormatEnumSchema>;
