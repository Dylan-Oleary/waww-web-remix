import { TmdbMediaVideoTypeEnumSchema } from "@/schema";

import type { TmdbMediaVideo } from "@/schema";

export const getOfficialTrailersFromVideoList = (
    videos: TmdbMediaVideo[] = []
): TmdbMediaVideo[] => {
    if (!videos || videos?.length === 0) return [];

    return videos?.filter(
        ({ official = false, site, type }) =>
            type === TmdbMediaVideoTypeEnumSchema.enum.Trailer && official && site === "YouTube"
    );
};
