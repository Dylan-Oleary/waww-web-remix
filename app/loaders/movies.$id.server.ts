import { json } from "@remix-run/node";
import { getAverageColor } from "fast-average-color-node";
import { z } from "zod";

import { tmdbApi } from "@/api";
import { TmdbMovie } from "@/schema";

// import { mockMovie } from "jest/mockData/tmdb";

import type { LoaderFunction } from "@remix-run/node";
import { mockMovie } from "jest/mockData/tmdb";

export type SingleMovieRouteLoaderData = {
    movie: TmdbMovie;
    posterPrimaryColor: {
        red: number;
        green: number;
        blue: number;
    };
};

export const singleMovieRouteLoader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    // TODO const movie = await tmdbApi.getMovieById(z.string().min(1).parse(id));

    // console.log(movie);

    const { value } = await getAverageColor(
        `https://image.tmdb.org/t/p/w200${mockMovie.poster_path}`
    );
    const [red, green, blue] = value;

    return json<SingleMovieRouteLoaderData>({
        movie: mockMovie,
        posterPrimaryColor: { red, green, blue }
    });
};
