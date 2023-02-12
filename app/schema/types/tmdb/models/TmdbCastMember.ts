import { z } from "zod";

export const TmdbCastMemberSchema = z.object({
    id: z.number(),
    adult: z.boolean(),
    cast_id: z.number(),
    character: z.string(),
    credit_id: z.string(),
    gender: z.number(),
    known_for_department: z.string(),
    name: z.string(),
    order: z.number(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string()
});
export type TmdbCastMember = z.infer<typeof TmdbCastMemberSchema>;
