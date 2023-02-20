import { z } from "zod";

export const TmdbCrewMemberSchema = z.object({
    id: z.number(),
    adult: z.boolean(),
    credit_id: z.string(),
    department: z.string(),
    gender: z.number(),
    job: z.string(),
    known_for_department: z.string(),
    name: z.string(),
    order: z.number().optional(),
    original_name: z.string(),
    popularity: z.number(),
    profile_path: z.string()
});
export type TmdbCrewMember = z.infer<typeof TmdbCrewMemberSchema>;
