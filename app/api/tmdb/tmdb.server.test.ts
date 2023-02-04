import fetchMock from "jest-fetch-mock";

import { tmdbApi } from "./tmdb.server";
import {
    TmdbDiscoverMoviesArgs,
    TmdbRandomMovieArgs
} from "../../schema/types/tmdb/api/TmdbDiscover";
import { TmdbSortByEnumSchema } from "../../schema/types/tmdb/api/TmdbSortBy";
import { getRandomNumberWithinRange } from "../../utils/shared/helpers";

describe("tmdbApi", () => {
    const mockFetchResponse = {
        id: 1,
        title: "The Big Lebowski"
    };

    beforeEach(() => {
        fetchMock.resetMocks();

        jest.spyOn(global, "fetch");
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("getMovieById", () => {
        beforeEach(() => {
            fetchMock.mockResponse(JSON.stringify(mockFetchResponse));
        });

        it("calls the TMDB API with the correct url parameters", async () => {
            const mockId = "123";
            const expectedUrl = `${process.env.TMDB_V3_API_URL}/movie/${mockId}?api_key=${process.env.TMDB_API_KEY}`;

            fetchMock.mockResponse(JSON.stringify(mockFetchResponse));

            const result = await tmdbApi.getMovieById(mockId);

            expect(result).toEqual(mockFetchResponse);
            expect(global.fetch).toBeCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
        });
    });

    describe("discoverMovies", () => {
        const defaultArgs: TmdbDiscoverMoviesArgs = {
            page: 1,
            include_adult: false,
            include_video: false,
            language: "en-US",
            sort_by: TmdbSortByEnumSchema.Enum["popularity.desc"]
        };

        beforeEach(() => {
            fetchMock.mockResponse(JSON.stringify(mockFetchResponse));
        });

        it("calls the TMDB API with the expected parameters", async () => {
            const args: TmdbDiscoverMoviesArgs = {
                ...defaultArgs,
                "release_date.gte": "1992-01-01",
                "vote_average.gte": 7
            };
            const result = await tmdbApi.discoverMovies(args);

            for (const [key, value] of Object.entries(args)) {
                expect(global.fetch).toHaveBeenCalledWith(
                    expect.stringContaining(`${key}=${value}`)
                );
            }

            expect(global.fetch).toBeCalledTimes(1);
            expect(result).toEqual(mockFetchResponse);
        });

        it("strips invalid parameters from the call to the TMDB API", async () => {
            const invalidKey = "blah";
            const invalidValue = "blob";
            const args: TmdbDiscoverMoviesArgs = {
                ...defaultArgs,
                //@ts-ignore - Testing invalid params
                [invalidKey]: invalidValue
            };
            const result = await tmdbApi.discoverMovies(args);

            expect(global.fetch).not.toHaveBeenCalledWith(
                expect.stringContaining(`${invalidKey}=${invalidValue}`)
            );
            expect(global.fetch).toBeCalledTimes(1);
            expect(result).toEqual(mockFetchResponse);
        });

        it("adds the default parameters to the call to the TMDB API", async () => {
            const args: TmdbDiscoverMoviesArgs = { page: 50 };
            const result = await tmdbApi.discoverMovies(args);

            for (const [key, value] of Object.entries({ ...defaultArgs, ...args })) {
                expect(global.fetch).toHaveBeenCalledWith(
                    expect.stringContaining(`${key}=${value}`)
                );
            }

            expect(global.fetch).toBeCalledTimes(1);
            expect(result).toEqual(mockFetchResponse);
        });

        it("adds the TMDB API key to the request", async () => {
            const result = await tmdbApi.discoverMovies(defaultArgs);

            expect(global.fetch).toHaveBeenCalledWith(
                expect.stringContaining(`api_key=${process.env.TMDB_API_KEY}`)
            );
            expect(global.fetch).toBeCalledTimes(1);
            expect(result).toEqual(mockFetchResponse);
        });

        it("throws an error if parameter validation fails", async () => {
            const args: TmdbDiscoverMoviesArgs = { page: 5000000 };
            await tmdbApi.discoverMovies(args).catch((error) => {
                expect(error).toBeDefined();
            });
        });
    });

    describe("getRandomMovies", () => {
        const defaultArgs: TmdbRandomMovieArgs = { number_of_items: 5 };

        beforeEach(() => {
            jest.spyOn(tmdbApi, "discoverMovies");
        });

        it("makes a second request to the 'discoverMovies' function if results exist but not on the requested page", async () => {
            fetchMock.mockResponses(
                [
                    JSON.stringify({ results: [], total_pages: 5, total_results: 100 }),
                    { status: 200 }
                ],
                [
                    JSON.stringify({
                        results: [mockFetchResponse],
                        total_pages: 5,
                        total_results: 100
                    }),
                    { status: 200 }
                ]
            );

            const { results } = await tmdbApi.getRandomMovies(defaultArgs);

            expect(tmdbApi.discoverMovies).toHaveBeenCalledTimes(2);
            expect(results).toHaveLength(1);
            expect(results).toEqual(expect.arrayContaining([mockFetchResponse]));
        });

        it("makes one request to the 'discoverMovies' function if results exist", async () => {
            fetchMock.mockResponses([
                JSON.stringify({
                    results: [mockFetchResponse],
                    total_pages: 5,
                    total_results: 100
                }),
                { status: 200 }
            ]);

            const { results } = await tmdbApi.getRandomMovies(defaultArgs);

            expect(tmdbApi.discoverMovies).toHaveBeenCalledTimes(1);
            expect(results).toHaveLength(1);
            expect(results).toEqual(expect.arrayContaining([mockFetchResponse]));
        });

        it("returns the correct number of movies", async () => {
            fetchMock.mockResponses([
                JSON.stringify({
                    results: new Array(10).fill(mockFetchResponse),
                    total_pages: 5,
                    total_results: 100
                }),
                { status: 200 }
            ]);

            const numberOfItems = getRandomNumberWithinRange(1, 10);
            const { results } = await tmdbApi.getRandomMovies({ number_of_items: numberOfItems });

            expect(tmdbApi.discoverMovies).toHaveBeenCalledTimes(1);
            expect(results).toHaveLength(numberOfItems);
            expect(results).toEqual(
                expect.arrayContaining(new Array(numberOfItems).fill(mockFetchResponse))
            );
        });

        it("throws an error if no 'number_of_items' are passed", async () => {
            //@ts-ignore - Testing invalid arguments
            await tmdbApi.getRandomMovies().catch((error) => {
                expect(error).toBeDefined();
            });
        });

        it("throws an error if an invalid 'number_of_items' are passed", async () => {
            await tmdbApi.getRandomMovies({ number_of_items: 50000 }).catch((error) => {
                expect(error).toBeDefined();
            });
        });
    });
});
