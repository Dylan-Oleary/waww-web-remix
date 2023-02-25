import { json } from "@remix-run/node";
import { getAverageColor } from "fast-average-color-node";

import { getOfficialTrailersFromVideoList, tmdbApi } from "@/api";
import { TmdbMovieExtended } from "@/schema";

import type { LoaderFunction } from "@remix-run/node";
import { mockMovieExtended } from "jest/mockData/tmdb";
import { moviesRouteLoader } from "./movies.server";

export type SingleMovieRouteLoaderData = {
    movie: TmdbMovieExtended;
    posterPrimaryColor: {
        red: number;
        green: number;
        blue: number;
    };
};

export const singleMovieRouteLoader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    // const movie = await tmdbApi.getMovieById(String(id), {
    //     append_to_response: "credits,recommendations,videos"
    // });
    const movie = { ...mockMovieExtended };

    // Return only top-billed cast and crew
    //TODO - Filter for duplicates and append titles to duplicates
    movie.credits = {
        cast: (movie?.credits?.cast ?? []).splice(0, 6),
        crew: (movie?.credits?.crew ?? []).splice(0, 6)
    };

    // Filter out official trailers
    movie.videos = {
        results: getOfficialTrailersFromVideoList(movie?.videos?.results)
    };

    //TODO - Recommendations Filtered

    const { value } = await getAverageColor(
        `https://image.tmdb.org/t/p/w200${mockMovieExtended.poster_path}`
    );
    const [red, green, blue] = value;

    return json<SingleMovieRouteLoaderData>({
        movie,
        posterPrimaryColor: { red, green, blue }
    });
};
