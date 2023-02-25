import { json } from "@remix-run/node";
import { getAverageColor } from "fast-average-color-node";

import {
    buildSingleMoviePageBackdropImage,
    buildSingleMoviePageResponsiveImage,
    getOfficialTrailersFromVideoList,
    getUniqueCrew,
    tmdbApi
} from "@/api";

import type { LoaderFunction } from "@remix-run/node";
import type { TmdbMovieExtended } from "@/schema";
import type { ResponsiveBackgroundImageSizeProps, ResponsiveImageSizeProps } from "@/types";

import { mockMovieExtended } from "jest/mockData/tmdb";

export type SingleMovieRouteLoaderData = {
    media: {
        backgroundImageProps: ResponsiveBackgroundImageSizeProps;
        posterImgProps: ResponsiveImageSizeProps;
    };
    movie: TmdbMovieExtended;
    posterPrimaryColor: {
        red: number;
        green: number;
        blue: number;
    };
};

export const singleMovieRouteLoader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    const movie = await tmdbApi.getMovieById(String(id), {
        append_to_response: "credits,recommendations,videos"
    });
    // const movie = { ...mockMovieExtended };

    // Return only top-billed cast and crew
    movie.credits = {
        cast: (movie?.credits?.cast ?? []).splice(0, 6),
        crew: getUniqueCrew(movie?.credits?.crew ?? [], 4)
    };

    // Filter out official trailers
    movie.videos = {
        results: getOfficialTrailersFromVideoList(movie?.videos?.results)
    };

    //TODO - Recommendations Filtered

    const { value } = await getAverageColor(`https://image.tmdb.org/t/p/w200${movie.poster_path}`);
    const [red, green, blue] = value;

    return json<SingleMovieRouteLoaderData>({
        movie,
        media: {
            //@ts-ignore
            backgroundImageProps: buildSingleMoviePageBackdropImage(movie?.backdrop_path ?? ""),
            //@ts-ignore
            posterImgProps: buildSingleMoviePageResponsiveImage(movie?.poster_path ?? "")
        },
        posterPrimaryColor: { red, green, blue }
    });
};
