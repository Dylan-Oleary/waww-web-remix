import { json } from "@remix-run/node";
import { getAverageColor } from "fast-average-color-node";
import { z } from "zod";

import { tmdbApi } from "@/api";
import { TmdbMovie } from "@/schema";

import type { LoaderFunction } from "@remix-run/node";
import { mockMovieExtended } from "jest/mockData/tmdb";

export type SingleMovieRouteLoaderData = {
    movie: TmdbMovie;
    posterPrimaryColor: {
        red: number;
        green: number;
        blue: number;
    };
};

export const singleMovieRouteLoader: LoaderFunction = async ({ params }) => {
    // const { id } = params;
    // const movie = await tmdbApi.getMovieById(String(id), {
    //     append_to_response: "credits,recommendations,videos"
    // });

    //TODO - Filter trailer
    //TODO - Get Director / Producer / Top Cast
    //TODO - Recommendations Filtered

    const { value } = await getAverageColor(
        `https://image.tmdb.org/t/p/w200${mockMovieExtended.poster_path}`
    );
    const [red, green, blue] = value;

    return json<SingleMovieRouteLoaderData>({
        movie: mockMovieExtended,
        posterPrimaryColor: { red, green, blue }
    });
};
