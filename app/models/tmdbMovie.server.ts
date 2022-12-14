import { TmdbMovie } from "@/schema";

const API_KEY = process?.env?.TMDB_API_KEY;
const BASE_URL = process?.env?.TMDB_V3_API_URL;

export const tmdbMovie = {
    /**
     * Fetches a movie details by its id
     *
     * @param id The id used to lookup the movie
     * @see https://developers.themoviedb.org/3/movies/get-movie-details
     */
    getMovieById: async (id: string): Promise<TmdbMovie> => {
        const movie = fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then((res) => res.json());

        return movie;
    }
};
