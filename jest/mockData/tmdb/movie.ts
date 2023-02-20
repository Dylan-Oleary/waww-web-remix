import { TmdbMovie, TmdbMovieExtended } from "@/schema";

export const mockMovie: TmdbMovie = {
    adult: false,
    backdrop_path: "/7Nwnmyzrtd0FkcRyPqmdzTPppQa.jpg",
    belongs_to_collection: null,
    budget: 100000000,
    genres: [
        { id: 80, name: "Crime" },
        { id: 18, name: "Drama" },
        { id: 35, name: "Comedy" }
    ],
    homepage: "http://www.thewolfofwallstreet.com/",
    id: 106646,
    imdb_id: "tt0993846",
    original_language: "en",
    original_title: "The Wolf of Wall Street",
    overview:
        "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
    popularity: 98.089,
    poster_path: "/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
    production_companies: [
        {
            id: 562,
            logo_path: "/k3NsSdV854UX4zEReX1dl1Psxbb.png",
            name: "Appian Way",
            origin_country: "US"
        },
        {
            id: 14654,
            logo_path: null,
            name: "EMJAG Productions",
            origin_country: "US"
        },
        {
            id: 19177,
            logo_path: null,
            name: "Red Granite Pictures",
            origin_country: ""
        },
        {
            id: 23243,
            logo_path: null,
            name: "Sikelia Productions",
            origin_country: "US"
        }
    ],
    production_countries: [{ iso_3166_1: "US", name: "United States of America" }],
    release_date: "2013-12-25",
    revenue: 392000000,
    runtime: 180,
    spoken_languages: [
        { iso_639_1: "en", name: "English" },
        { iso_639_1: "fr", name: "Français" }
    ],
    status: "Released",
    tagline: "EARN. SPEND. PARTY.",
    title: "The Wolf of Wall Street",
    video: false,
    vote_average: 8.036,
    vote_count: 21077
};

export const mockMovieExtended: TmdbMovieExtended = {
    ...mockMovie,
    credits: {
        cast: [
            {
                id: 6193,
                adult: false,
                cast_id: 428,
                character: "Jordan Belfort",
                credit_id: "618978a62f266b002118dd89",
                gender: 2,
                known_for_department: "Acting",
                name: "Leonardo DiCaprio",
                order: 0,
                original_name: "Leonardo DiCaprio",
                popularity: 63.305,
                profile_path: "/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg"
            },
            {
                id: 21007,
                adult: false,
                cast_id: 430,
                character: "Donnie Azoff",
                credit_id: "618978c9e741460043941416",
                gender: 2,
                known_for_department: "Acting",
                name: "Jonah Hill",
                order: 1,
                original_name: "Jonah Hill",
                popularity: 33.06,
                profile_path: "/5aE4GgJADHzN1QsS6zkzElZSEYq.jpg"
            },
            {
                id: 234352,
                adult: false,
                cast_id: 429,
                character: "Naomi Lapaglia",
                credit_id: "618978b9cf62cd008c7665c8",
                gender: 1,
                known_for_department: "Acting",
                name: "Margot Robbie",
                order: 2,
                original_name: "Margot Robbie",
                popularity: 58.44,
                profile_path: "/euDPyqLnuwaWMHajcU3oZ9uZezR.jpg"
            },
            {
                id: 10297,
                adult: false,
                cast_id: 10,
                character: "Mark Hanna",
                credit_id: "52fe4a6dc3a36847f81cd4ef",
                gender: 2,
                known_for_department: "Acting",
                name: "Matthew McConaughey",
                order: 3,
                original_name: "Matthew McConaughey",
                popularity: 16.191,
                profile_path: "/rUxLWWCDUF8RnDaocSqrVDJ2MS1.jpg"
            }
        ],
        crew: [
            {
                id: 947,
                adult: false,
                credit_id: "56e8462cc3a368408400354c",
                department: "Sound",
                gender: 2,
                job: "Original Music Composer",
                known_for_department: "Sound",
                name: "Hans Zimmer",
                original_name: "Hans Zimmer",
                popularity: 13.055,
                profile_path: "/tpQnDeHY15szIXvpnhlprufz4d.jpg"
            },
            {
                id: 525,
                adult: false,
                credit_id: "5e83ac2ee33f830018359a00",
                department: "Directing",
                gender: 2,
                job: "Director",
                known_for_department: "Directing",
                name: "Christopher Nolan",
                original_name: "Christopher Nolan",
                popularity: 19.608,
                profile_path: "/xuAIuYSmsUzKlUMBFGVZaWsY3DZ.jpg"
            }
        ]
    },
    recommendations: {
        page: 1,
        results: [
            {
                adult: false,
                backdrop_path: "/lVy5Zqcty2NfemqKYbVJfdg44rK.jpg",
                id: 24,
                title: "Kill Bill: Vol. 1",
                original_language: "en",
                original_title: "Kill Bill: Vol. 1",
                overview:
                    "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
                poster_path: "/v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
                media_type: "movie",
                genre_ids: [18, 53, 9648],
                popularity: 36.586,
                release_date: "2003-10-10",
                video: false,
                vote_average: 7.97,
                vote_count: 15471
            },
            {
                adult: false,
                backdrop_path: "/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
                id: 500,
                title: "Reservoir Dogs",
                original_language: "en",
                original_title: "Reservoir Dogs",
                overview:
                    "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
                poster_path: "/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
                media_type: "movie",
                genre_ids: [18, 53, 9648],
                popularity: 34.588,
                release_date: "1992-09-02",
                video: false,
                vote_average: 8.141,
                vote_count: 12665
            }
        ]
    },
    videos: {
        results: [
            {
                iso_639_1: "en",
                iso_3166_1: "US",
                name: "The Wolf of Wall Street | Official Red Band Trailer (2013) Leonardo DiCaprio, Margot Robbie",
                key: "mdGQL6v7jtg",
                site: "YouTube",
                size: 1080,
                type: "Trailer",
                official: false,
                published_at: "2022-08-20T10:12:54.000Z",
                id: "630221ca5f4b73008268025c"
            },
            {
                iso_639_1: "en",
                iso_3166_1: "US",
                name: "Not Leaving Clip",
                key: "g07Xxr20L9s",
                site: "YouTube",
                size: 720,
                type: "Clip",
                official: true,
                published_at: "2021-11-11T16:59:55.000Z",
                id: "62731959c74eba0f0f0fca19"
            }
        ]
    }
};
