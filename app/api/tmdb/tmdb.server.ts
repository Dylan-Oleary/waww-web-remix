import {
    TmdbDiscoverMoviesArgs,
    TmdbDiscoverMoviesParamsSchema,
    TmdbDiscoverMoviesResponse,
    TmdbDiscoverMoviesResultRecord,
    TmdbMovie,
    TmdbRandomMovieArgs,
    TmdbRandomMovieArgsSchema,
    TmdbRandomMovieResponse,
    TmdbSortByEnum,
    TmdbSortByEnumSchema,
    withTmdbApiKey
} from "@/schema";
import {
    convertObjectToUrlSearchParams,
    getRandomKeyValuePairFromObject,
    getRandomNumberWithinRange,
    shuffleArray
} from "@/utils";

const API_KEY = process?.env?.TMDB_API_KEY;
const BASE_URL = process?.env?.TMDB_V3_API_URL;
const BASE_URL_PARAMS = { api_key: API_KEY ?? "" };

export const tmdbApi = {
    /**
     * Fetches a movie details by its id
     *
     * @param id The id used to lookup the movie
     * @see https://developers.themoviedb.org/3/movies/get-movie-details
     */
    async getMovieById(id: string): Promise<TmdbMovie> {
        return fetch(`${BASE_URL}/movie/${id}?${new URLSearchParams(BASE_URL_PARAMS)}`).then(
            (res) => res.json()
        );
    },
    /**
     * Fetches movies based off of passed filter params
     *
     * @param params Filter params used to discover movies
     * @see https://developers.themoviedb.org/3/discover/movie-discover
     */
    async discoverMovies(params: TmdbDiscoverMoviesArgs): Promise<TmdbDiscoverMoviesResponse> {
        const mergedParams = withTmdbApiKey(TmdbDiscoverMoviesParamsSchema).parse({
            ...BASE_URL_PARAMS,
            ...params
        });

        return fetch(
            `${BASE_URL}/discover/movie?${convertObjectToUrlSearchParams(mergedParams)}`
        ).then((res) => res.json());
    },
    /**
     * Fetches a random list of movies based on the passed filter params
     *
     * @param params Filter parameters used to fetch movies
     */
    async getRandomMovies(params: TmdbRandomMovieArgs): Promise<TmdbRandomMovieResponse> {
        const validRandomMovieArgs = TmdbRandomMovieArgsSchema.parse(params);
        const [_, sort_by] = getRandomKeyValuePairFromObject(TmdbSortByEnumSchema.Values) as [
            string,
            TmdbSortByEnum
        ];
        const discoverMovieArgs = TmdbDiscoverMoviesParamsSchema.parse({
            ...validRandomMovieArgs,
            page: getRandomNumberWithinRange(1, 150),
            sort_by
        });

        let data = await this.discoverMovies(discoverMovieArgs);
        const { results = [], total_pages = 0, total_results = 0 } = data;

        // Retry if results exist but the page requested did not exist
        if (results?.length === 0 && total_pages > 0 && total_results > 0) {
            discoverMovieArgs.page =
                total_pages === 1 ? total_pages : getRandomNumberWithinRange(1, total_pages);
            data = await this.discoverMovies(discoverMovieArgs);
        }

        return {
            results: shuffleArray<TmdbDiscoverMoviesResultRecord>(data?.results ?? []).slice(
                0,
                validRandomMovieArgs.number_of_items
            )
        };
    }
};
