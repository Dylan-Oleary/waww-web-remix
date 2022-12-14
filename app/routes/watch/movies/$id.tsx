import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { z } from "zod";

import { tmdbMovie } from "@/models";
import { TmdbMovie } from "@/schema";

import type { LoaderFunction } from "@remix-run/node";

type LoaderData = {
    movie: TmdbMovie;
};

export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    const movie = await tmdbMovie.getMovieById(z.string().min(1).parse(id));

    return json<LoaderData>({ movie });
};

//TODO: Export Error boundary

export default function Index() {
    const { movie } = useLoaderData<LoaderData>();

    return <div>{movie.title}</div>;
}
