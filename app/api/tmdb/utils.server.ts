import { TmdbMediaVideoTypeEnumSchema } from "@/schema";
import { tmdbConfigurationData } from "./stub.server";

import type { TmdbCrewMember, TmdbMediaVideo } from "@/schema";
import type { ResponsiveBackgroundImageSizeProps, ResponsiveImageSizeProps } from "@/types";

//TODO - Add default assets
export const buildSingleMoviePageBackdropImage = (
    path: string
): ResponsiveBackgroundImageSizeProps | null => {
    if (!path || !!!path?.trim()) return null;

    //TODO - Cache image configuration somewhere
    const { backdrop_sizes, secure_base_url } = tmdbConfigurationData.images;
    const validSizes = backdrop_sizes.filter((size) => size !== "original");

    return {
        lowResSrc: `${secure_base_url}${validSizes[validSizes.length - 2]}${path}`,
        highResSrc: `${secure_base_url}${validSizes[validSizes.length - 1]}${path}`
    };
};

//TODO - Add default assets
export const buildSingleMoviePageResponsiveImage = (
    path: string
): ResponsiveImageSizeProps | null => {
    if (!path || !!!path?.trim()) return null;

    //TODO - Cache image configuration somewhere
    const { poster_sizes, secure_base_url } = tmdbConfigurationData.images;
    const validSizes: string[] = poster_sizes.filter((size) => size !== "original");
    const imageProps: ResponsiveImageSizeProps = {
        src: "",
        srcSet: ""
    };
    const srcSet: string[] = [];
    const sizes: string[] = [];

    for (const [index, size] of validSizes.entries()) {
        const width = parseInt(size.slice(1));
        const url = `${secure_base_url}${size}${path}`;

        if (index + 1 === validSizes.length) {
            sizes.push(`${width}px`);
        } else {
            sizes.push(`(max-width: ${width * 4}px) ${width}px`);
        }

        srcSet.push(`${url} ${width}w`);
    }

    imageProps.sizes = sizes.join(", ");
    imageProps.src = `${secure_base_url}${validSizes[validSizes.length - 1]}${path}`;
    imageProps.srcSet = srcSet.join(", ");

    return imageProps;
};

export const getOfficialTrailersFromVideoList = (
    videos: TmdbMediaVideo[] = []
): TmdbMediaVideo[] => {
    if (!videos || videos?.length === 0) return [];

    return videos?.filter(
        ({ official = false, site, type }) =>
            type === TmdbMediaVideoTypeEnumSchema.enum.Trailer && official && site === "YouTube"
    );
};

export const getUniqueCrew = (crew: TmdbCrewMember[], limit?: number): TmdbCrewMember[] => {
    const uniqueCrew: TmdbCrewMember[] = [];

    for (const crewMember of crew) {
        const foundCrewMemberIndex = uniqueCrew.findIndex(({ id }) => id === crewMember.id);

        if (foundCrewMemberIndex === -1) {
            uniqueCrew.push(crewMember);
        } else {
            uniqueCrew[foundCrewMemberIndex].job += `, ${crewMember.job}`;
        }

        if (limit && limit === uniqueCrew.length) break;
    }

    return uniqueCrew;
};
