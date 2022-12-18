import { json, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { tmdbApi } from "@/api";

export const loader: LoaderFunction = async () => {
    const data = await tmdbApi.getRandomMovies({ number_of_items: 1 });

    return json({ data }, 200);
};

export default function Index() {
    return <Outlet />;
}
