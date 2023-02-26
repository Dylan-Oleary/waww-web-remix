import { json } from "@remix-run/node";

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
    assets: {
        backgroundImage: ResponsiveBackgroundImageSizeProps;
        posterImage: ResponsiveImageSizeProps;
    };
    movie: TmdbMovieExtended;
};

export const singleMovieRouteLoader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    // const movie = await tmdbApi.getMovieById(String(id), {
    //     append_to_response: "credits,recommendations,videos"
    // });
    const movie = { ...mockMovieExtended };

    // Return only top-billed cast and crew
    movie.credits = {
        cast: (movie?.credits?.cast ?? []).splice(0, 6),
        //TODO - sort by order
        crew: getUniqueCrew(movie?.credits?.crew ?? [], 4)
    };

    // Filter out official trailers
    movie.videos = {
        results: getOfficialTrailersFromVideoList(movie?.videos?.results)
    };

    //TODO - Recommendations Filtered

    return json<SingleMovieRouteLoaderData>({
        movie,
        assets: {
            //@ts-ignore
            backgroundImage: buildSingleMoviePageBackdropImage(movie?.backdrop_path ?? ""),
            //@ts-ignore
            posterImage: buildSingleMoviePageResponsiveImage(movie?.poster_path ?? "")
        }
    });
};
