import {
    TmdbCertificationCountryEnumSchema,
    TmdbGenre,
    TmdbGetCertificationResponse,
    TmdbWatchProvider
} from "@/schema";

export const tmdbCertificationData: TmdbGetCertificationResponse = {
    [TmdbCertificationCountryEnumSchema.Enum.CA]: [
        { certification: "G", meaning: "All ages.", order: 2 },
        {
            certification: "PG",
            meaning:
                "Parental guidance advised. There is no age restriction but some material may not be suitable for all children.",
            order: 3
        },
        {
            certification: "14A",
            meaning: "Persons under 14 years of age must be accompanied by an adult.",
            order: 4
        },
        {
            certification: "18A",
            meaning:
                "Persons under 18 years of age must be accompanied by an adult. In the Maritimes & Manitoba, children under the age of 14 are prohibited from viewing the film.",
            order: 5
        },
        {
            certification: "R",
            meaning:
                "Restricted to 18 years and over. No rental or purchase by those under 18. Content not suitable for minors. Video contains frequent use of: sexual activity; brutal/graphic violence; intense horror; and/or other disturbing content.",
            order: 6
        },
        {
            certification: "A",
            meaning:
                "Admittance restricted to people 18 years of age or older. Sole purpose of the film is the portrayal of sexually explicit activity and/or explicit violence.",
            order: 7
        },
        {
            certification: "E",
            meaning:
                "Exempt. Contains material not subject to classification such as documentaries, nature, travel, music, arts and culture, sports and educational and instructional information.",
            order: 1
        }
    ],
    [TmdbCertificationCountryEnumSchema.Enum["CA-QC"]]: [
        { certification: "NR", meaning: "No rating information.", order: 0 },
        {
            certification: "G",
            meaning:
                'General Rating – May be viewed, rented or purchased by persons of all ages. If a film carrying a "G" rating might offend the sensibilities of a child under 8 years of age, "Not suitable for young children" is appended to the classification.',
            order: 1
        },
        {
            certification: "13+",
            meaning:
                "13 years and over – May be viewed, rented or purchased only by children 13 years of age or over. Children under 13 may be admitted only if accompanied by an adult.",
            order: 2
        },
        {
            certification: "16+",
            meaning:
                "16 years and over – May be viewed, rented or purchased only by children 16 years of age or over.",
            order: 3
        },
        {
            certification: "18+",
            meaning:
                '18 years and over – May be viewed, rented or purchased only by adults 18 years of age or over. If a film contains real and explicit sexual activity "Explicit sexuality" is appended to the classification, and in the retail video industry storeowners are required to place the film in a room reserved for adults.',
            order: 4
        }
    ],
    [TmdbCertificationCountryEnumSchema.Enum.US]: [
        {
            certification: "R",
            meaning:
                "Under 17 requires accompanying parent or adult guardian 21 or older. The parent/guardian is required to stay with the child under 17 through the entire movie, even if the parent gives the child/teenager permission to see the film alone. These films may contain strong profanity, graphic sexuality, nudity, strong violence, horror, gore, and strong drug use. A movie rated R for profanity often has more severe or frequent language than the PG-13 rating would permit. An R-rated movie may have more blood, gore, drug use, nudity, or graphic sexuality than a PG-13 movie would admit.",
            order: 4
        },
        {
            certification: "PG",
            meaning:
                "Some material may not be suitable for children under 10. These films may contain some mild language, crude/suggestive humor, scary moments and/or violence. No drug content is present. There are a few exceptions to this rule. A few racial insults may also be heard.",
            order: 2
        },
        {
            certification: "NC-17",
            meaning:
                "These films contain excessive graphic violence, intense or explicit sex, depraved, abhorrent behavior, explicit drug abuse, strong language, explicit nudity, or any other elements which, at present, most parents would consider too strong and therefore off-limits for viewing by their children and teens. NC-17 does not necessarily mean obscene or pornographic in the oft-accepted or legal meaning of those words.",
            order: 5
        },
        {
            certification: "G",
            meaning:
                "All ages admitted. There is no content that would be objectionable to most parents. This is one of only two ratings dating back to 1968 that still exists today.",
            order: 1
        },
        { certification: "NR", meaning: "No rating information.", order: 0 },
        {
            certification: "PG-13",
            meaning:
                "Some material may be inappropriate for children under 13. Films given this rating may contain sexual content, brief or partial nudity, some strong language and innuendo, humor, mature themes, political themes, terror and/or intense action violence. However, bloodshed is rarely present. This is the minimum rating at which drug content is present.",
            order: 3
        }
    ]
};

export const tmdbGenreData: { genres: TmdbGenre[] } = {
    genres: [
        { id: 28, name: "Action" },
        { id: 12, name: "Adventure" },
        { id: 16, name: "Animation" },
        { id: 35, name: "Comedy" },
        { id: 80, name: "Crime" },
        { id: 99, name: "Documentary" },
        { id: 18, name: "Drama" },
        { id: 10751, name: "Family" },
        { id: 14, name: "Fantasy" },
        { id: 36, name: "History" },
        { id: 27, name: "Horror" },
        { id: 10402, name: "Music" },
        { id: 9648, name: "Mystery" },
        { id: 10749, name: "Romance" },
        { id: 878, name: "Science Fiction" },
        { id: 10770, name: "TV Movie" },
        { id: 53, name: "Thriller" },
        { id: 10752, name: "War" },
        { id: 37, name: "Western" }
    ]
};

export const tmdbWatchProviderData: { results: TmdbWatchProvider[] } = {
    results: [
        {
            display_priority: 9,
            logo_path: "https://www.themoviedb.org/t/p/original/5P99DkK1jVs95KcE8bYG9MBtGQ.jpg",
            provider_id: 87,
            provider_name: "Acorn TV"
        },
        {
            display_priority: 118,
            logo_path: "https://www.themoviedb.org/t/p/original/8WWD7t5Irwq9kAH4rufQ4Pe1Dog.jpg",
            provider_id: 196,
            provider_name: "AcornTV Amazon Channel"
        },
        {
            display_priority: 12,
            logo_path: "https://www.themoviedb.org/t/p/original/m3NWxxR23l1w1e156fyTuw931gx.jpg",
            provider_id: 532,
            provider_name: "aha"
        },
        {
            display_priority: 1,
            logo_path: "https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg",
            provider_id: 119,
            provider_name: "Amazon Prime Video"
        },
        {
            display_priority: 12,
            logo_path: "https://www.themoviedb.org/t/p/original/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg",
            provider_id: 10,
            provider_name: "Amazon Video"
        },
        {
            display_priority: 28,
            logo_path: "https://www.themoviedb.org/t/p/original/xlonQMSmhtA2HHwK3JKF9ghx7M8.jpg",
            provider_id: 526,
            provider_name: "AMC+"
        },
        {
            display_priority: 22,
            logo_path: "https://www.themoviedb.org/t/p/original/9edKQczyuMmQM1yS520hgmJbcaC.jpg",
            provider_id: 528,
            provider_name: "AMC+ Amazon Channel"
        },
        {
            display_priority: 2,
            logo_path: "https://www.themoviedb.org/t/p/original/peURlLlr8jggOwK53fJ5wdQl05y.jpg",
            provider_id: 2,
            provider_name: "Apple iTunes"
        },
        {
            display_priority: 10,
            logo_path: "https://www.themoviedb.org/t/p/original/6uhKBfmtzFqOcLousHwZuzcrScK.jpg",
            provider_id: 350,
            provider_name: "Apple TV Plus"
        },
        {
            display_priority: 172,
            logo_path: "https://www.themoviedb.org/t/p/original/4UfmxLzph9Aso9pr9bXohp0V3sr.jpg",
            provider_id: 529,
            provider_name: "ARROW"
        },
        {
            display_priority: 159,
            logo_path: "https://www.themoviedb.org/t/p/original/3VxDqUk25KU5860XxHKwV9cy3L8.jpg",
            provider_id: 514,
            provider_name: "AsianCrush"
        },
        {
            display_priority: 86,
            logo_path: "https://www.themoviedb.org/t/p/original/xGUwoyO5LlHKEQGGYSMoLxo7c6D.jpg",
            provider_id: 610,
            provider_name: "BBC Earth Amazon Channel"
        },
        {
            display_priority: 23,
            logo_path: "https://www.themoviedb.org/t/p/original/aGIS8maihUm60A3moKYD9gfYHYT.jpg",
            provider_id: 151,
            provider_name: "BritBox"
        },
        {
            display_priority: 119,
            logo_path: "https://www.themoviedb.org/t/p/original/xTfyFZqWv8c8sxlFooUzemi6WRM.jpg",
            provider_id: 197,
            provider_name: "BritBox Amazon Channel"
        },
        {
            display_priority: 17,
            logo_path: "https://www.themoviedb.org/t/p/original/xLu1rkZNOKuNnRNr70wySosfTBf.jpg",
            provider_id: 554,
            provider_name: "BroadwayHD"
        },
        {
            display_priority: 38,
            logo_path: "https://www.themoviedb.org/t/p/original/nVly1ywNU2hMYLaieL6ixhEFTWh.jpg",
            provider_id: 314,
            provider_name: "CBC Gem"
        },
        {
            display_priority: 13,
            logo_path: "https://www.themoviedb.org/t/p/original/yNr05VQlKK4dI0Ncwf9InIVGKs9.jpg",
            provider_id: 140,
            provider_name: "Cineplex"
        },
        {
            display_priority: 31,
            logo_path: "https://www.themoviedb.org/t/p/original/iaMw6nOyxUzXSacrLQ0Au6CfZkc.jpg",
            provider_id: 445,
            provider_name: "Classix"
        },
        {
            display_priority: 53,
            logo_path: "https://www.themoviedb.org/t/p/original/6FWwq6rayak6g6rvzVVP1NnX9gf.jpg",
            provider_id: 469,
            provider_name: "Club Illico"
        },
        {
            display_priority: 4,
            logo_path: "https://www.themoviedb.org/t/p/original/gJ3yVMWouaVj6iHd59TISJ1TlM5.jpg",
            provider_id: 230,
            provider_name: "Crave"
        },
        {
            display_priority: 5,
            logo_path: "https://www.themoviedb.org/t/p/original/sB5vHrmYmliwUvBwZe8HpXo9r8m.jpg",
            provider_id: 305,
            provider_name: "Crave Starz"
        },
        {
            display_priority: 39,
            logo_path: "https://www.themoviedb.org/t/p/original/4TJTNWd2TT1kYj6ocUEsQc8WRgr.jpg",
            provider_id: 258,
            provider_name: "Criterion Channel"
        },
        {
            display_priority: 5,
            logo_path: "https://www.themoviedb.org/t/p/original/8Gt1iClBlzTeQs8WQm8UrCoIxnQ.jpg",
            provider_id: 283,
            provider_name: "Crunchyroll"
        },
        {
            display_priority: 39,
            logo_path: "https://www.themoviedb.org/t/p/original/hNO6rEpZ9l2LQEkjacrpeoocKbX.jpg",
            provider_id: 326,
            provider_name: "CTV"
        },
        {
            display_priority: 25,
            logo_path: "https://www.themoviedb.org/t/p/original/59azlQKUgFdYq6QI5QEAxIeecyL.jpg",
            provider_id: 692,
            provider_name: "Cultpix"
        },
        {
            display_priority: 12,
            logo_path: "https://www.themoviedb.org/t/p/original/67Ee4E6qOkQGHeUTArdJ1qRxzR2.jpg",
            provider_id: 190,
            provider_name: "Curiosity Stream"
        },
        {
            display_priority: 131,
            logo_path: "https://www.themoviedb.org/t/p/original/x4AFz5koB2R8BRn8WNh6EqXUGHc.jpg",
            provider_id: 355,
            provider_name: "Darkmatter TV"
        },
        {
            display_priority: 19,
            logo_path: "https://www.themoviedb.org/t/p/original/u2H29LCxRzjZVUoZUQAHKm5P8Zc.jpg",
            provider_id: 444,
            provider_name: "Dekkoo"
        },
        {
            display_priority: 28,
            logo_path: "https://www.themoviedb.org/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg",
            provider_id: 337,
            provider_name: "Disney Plus"
        },
        {
            display_priority: 21,
            logo_path: "https://www.themoviedb.org/t/p/original/aQ1ritN00jXc7RAFfUoQKGAAfp7.jpg",
            provider_id: 569,
            provider_name: "DocAlliance Films"
        },
        {
            display_priority: 14,
            logo_path: "https://www.themoviedb.org/t/p/original/bvcdVO7SDHKEa6D40g1jntXKNj.jpg",
            provider_id: 475,
            provider_name: "DOCSVILLE"
        },
        {
            display_priority: 181,
            logo_path: "https://www.themoviedb.org/t/p/original/9sk88OAxDZSdMOzg8VuqtGpgWQ3.jpg",
            provider_id: 536,
            provider_name: "Dogwoof On Demand"
        },
        {
            display_priority: 78,
            logo_path: "https://www.themoviedb.org/t/p/original/cBCzPOX6ir5L8hCoJlfIWycxauh.jpg",
            provider_id: 254,
            provider_name: "Dove Channel"
        },
        {
            display_priority: 24,
            logo_path: "https://www.themoviedb.org/t/p/original/fadQYOyKL0tqfyj012nYJxm3N2I.jpg",
            provider_id: 677,
            provider_name: "Eventive"
        },
        {
            display_priority: 55,
            logo_path: "https://www.themoviedb.org/t/p/original/eAhAUvV2ouai3cGti5y70YOtrBN.jpg",
            provider_id: 25,
            provider_name: "Fandor"
        },
        {
            display_priority: 188,
            logo_path: "https://www.themoviedb.org/t/p/original/tKJdVrC0fjEtQtYYjlVwX9rmqrj.jpg",
            provider_id: 579,
            provider_name: "Film Movement Plus"
        },
        {
            display_priority: 26,
            logo_path: "https://www.themoviedb.org/t/p/original/4FqTBYsUSZgS9z9UGKgxSDBbtc8.jpg",
            provider_id: 701,
            provider_name: "FilmBox+"
        },
        {
            display_priority: 18,
            logo_path: "https://www.themoviedb.org/t/p/original/olmH7t5tEng8Yuq33KmvpvaaVIg.jpg",
            provider_id: 559,
            provider_name: "Filmzie"
        },
        {
            display_priority: 127,
            logo_path: "https://www.themoviedb.org/t/p/original/4U02VrbgLfUKJAUCHKzxWFtnPx4.jpg",
            provider_id: 331,
            provider_name: "FlixFling"
        },
        {
            display_priority: 46,
            logo_path: "https://www.themoviedb.org/t/p/original/awgDmkHSfGEcoIVpeQKwaE2OgLM.jpg",
            provider_id: 449,
            provider_name: "Global TV"
        },
        {
            display_priority: 3,
            logo_path: "https://www.themoviedb.org/t/p/original/tbEdFQDwx5LEVr8WpSeXQSIirVq.jpg",
            provider_id: 3,
            provider_name: "Google Play Movies"
        },
        {
            display_priority: 7,
            logo_path: "https://www.themoviedb.org/t/p/original/iX0pvJ2GFATbVIH5IHMwG0ffIdV.jpg",
            provider_id: 100,
            provider_name: "GuideDoc"
        },
        {
            display_priority: 54,
            logo_path: "https://www.themoviedb.org/t/p/original/7RJrotCrvD0oUjG0udv9on6CDKX.jpg",
            provider_id: 296,
            provider_name: "Hayu Amazon Channel"
        },
        {
            display_priority: 102,
            logo_path: "https://www.themoviedb.org/t/p/original/9baY98ZKyDaNArp1H9fAWqiR3Zi.jpg",
            provider_id: 430,
            provider_name: "HiDive"
        },
        {
            display_priority: 22,
            logo_path: "https://www.themoviedb.org/t/p/original/d4vHcXY9rwnr763wQns2XJThclt.jpg",
            provider_id: 315,
            provider_name: "Hoichoi"
        },
        {
            display_priority: 24,
            logo_path: "https://www.themoviedb.org/t/p/original/8jzbtiXz0eZ6aPjxdmGW3ceqjon.jpg",
            provider_id: 182,
            provider_name: "Hollywood Suite"
        },
        {
            display_priority: 96,
            logo_path: "https://www.themoviedb.org/t/p/original/fTc12wQdF3tOgKE16Eai4vjOFPg.jpg",
            provider_id: 705,
            provider_name: "Hollywood Suite Amazon Channel"
        },
        {
            display_priority: 33,
            logo_path: "https://www.themoviedb.org/t/p/original/aJ0b9BLU1Cvv5hIz9fEhKKc1x1D.jpg",
            provider_id: 212,
            provider_name: "Hoopla"
        },
        {
            display_priority: 12,
            logo_path: "https://www.themoviedb.org/t/p/original/366UvWIQMqvKI6SyinCmvQx2B2j.jpg",
            provider_id: 146,
            provider_name: "iciTouTV"
        },
        {
            display_priority: 77,
            logo_path: "https://www.themoviedb.org/t/p/original/kvn50K9EIdwJhpLwnFFE1D2rOIZ.jpg",
            provider_id: 587,
            provider_name: "IFC Amazon Channel"
        },
        {
            display_priority: 57,
            logo_path: "https://www.themoviedb.org/t/p/original/pGk6V35szQnJVq2OoJLnRpjifb3.jpg",
            provider_id: 492,
            provider_name: "ILLICO"
        },
        {
            display_priority: 25,
            logo_path: "https://www.themoviedb.org/t/p/original/8MXYXzZGoPAEQU13GWk1GVvKNUS.jpg",
            provider_id: 581,
            provider_name: "iQIYI"
        },
        {
            display_priority: 56,
            logo_path: "https://www.themoviedb.org/t/p/original/iPK2kpaKnGYvSdEcRerIbkqWVPh.jpg",
            provider_id: 525,
            provider_name: "Knowledge Network"
        },
        {
            display_priority: 13,
            logo_path: "https://www.themoviedb.org/t/p/original/zyX0rRd986t2iKXUCvEsW7or4KN.jpg",
            provider_id: 464,
            provider_name: "Kocowa"
        },
        {
            display_priority: 23,
            logo_path: "https://www.themoviedb.org/t/p/original/uHv6Y4YSsr4cj7q4cBbAg7WXKEI.jpg",
            provider_id: 575,
            provider_name: "KoreaOnDemand"
        },
        {
            display_priority: 42,
            logo_path: "https://www.themoviedb.org/t/p/original/tQL30UKe7OykrtkYQCmYEFrdIMC.jpg",
            provider_id: 608,
            provider_name: "Love Nature Amazon Channel"
        },
        {
            display_priority: 16,
            logo_path: "https://www.themoviedb.org/t/p/original/gekkP93StjYdiMAInViVmrnldNY.jpg",
            provider_id: 551,
            provider_name: "Magellan TV"
        },
        {
            display_priority: 44,
            logo_path: "https://www.themoviedb.org/t/p/original/fUUgfrOfvvPKx9vhFBd6IMdkfLy.jpg",
            provider_id: 588,
            provider_name: "MGM Amazon Channel"
        },
        {
            display_priority: 47,
            logo_path: "https://www.themoviedb.org/t/p/original/shq88b09gTBYC4hA7K7MUL8Q4zP.jpg",
            provider_id: 68,
            provider_name: "Microsoft Store"
        },
        {
            display_priority: 6,
            logo_path: "https://www.themoviedb.org/t/p/original/bVR4Z1LCHY7gidXAJF5pMa4QrDS.jpg",
            provider_id: 11,
            provider_name: "MUBI"
        },
        {
            display_priority: 0,
            logo_path: "https://www.themoviedb.org/t/p/original/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg",
            provider_id: 8,
            provider_name: "Netflix"
        },
        {
            display_priority: 219,
            logo_path: "https://www.themoviedb.org/t/p/original/mShqQVDhHoK7VUbfYG3Un6xE8Mv.jpg",
            provider_id: 1796,
            provider_name: "Netflix basic with Ads"
        },
        {
            display_priority: 8,
            logo_path: "https://www.themoviedb.org/t/p/original/j2OLGxyy0gKbPVI0DYFI2hJxP6y.jpg",
            provider_id: 175,
            provider_name: "Netflix Kids"
        },
        {
            display_priority: 49,
            logo_path: "https://www.themoviedb.org/t/p/original/yXAjdxUTdehG4YUUEevvaeRhZl7.jpg",
            provider_id: 441,
            provider_name: "NFB"
        },
        {
            display_priority: 60,
            logo_path: "https://www.themoviedb.org/t/p/original/3ISpW4LBSKAaCyIZI3cxHiox8dI.jpg",
            provider_id: 516,
            provider_name: "Noovo"
        },
        {
            display_priority: 41,
            logo_path: "https://www.themoviedb.org/t/p/original/bCQVIO5iEjfstObco3fuhFB7sbs.jpg",
            provider_id: 607,
            provider_name: "OUTtv Amazon Channel"
        },
        {
            display_priority: 112,
            logo_path: "https://www.themoviedb.org/t/p/original/nXi2nRDPMNivJyFOifEa2t15Xuu.jpg",
            provider_id: 433,
            provider_name: "OVID"
        },
        {
            display_priority: 42,
            logo_path: "https://www.themoviedb.org/t/p/original/2tAjxjo1n3H7fsXqMsxWFMeFUWp.jpg",
            provider_id: 177,
            provider_name: "Pantaflix"
        },
        {
            display_priority: 7,
            logo_path: "https://www.themoviedb.org/t/p/original/xbhHHa1YgtpwhC8lb1NQ3ACVcLd.jpg",
            provider_id: 531,
            provider_name: "Paramount Plus"
        },
        {
            display_priority: 18,
            logo_path: "https://www.themoviedb.org/t/p/original/3E0RkIEQrrGYazs63NMsn3XONT6.jpg",
            provider_id: 582,
            provider_name: "Paramount+ Amazon Channel"
        },
        {
            display_priority: 96,
            logo_path: "https://www.themoviedb.org/t/p/original/mMALQK52OFGoYUKOSCZILZkfGWs.jpg",
            provider_id: 294,
            provider_name: "PBS Masterpiece Amazon Channel"
        },
        {
            display_priority: 173,
            logo_path: "https://www.themoviedb.org/t/p/original/wDWvnupneMbY6RhBTHQC9zU0SCX.jpg",
            provider_id: 538,
            provider_name: "Plex"
        },
        {
            display_priority: 24,
            logo_path: "https://www.themoviedb.org/t/p/original/qjtOUIUnk4kRpcZmaddjqDHM0dR.jpg",
            provider_id: 344,
            provider_name: "Rakuten Viki"
        },
        {
            display_priority: 107,
            logo_path: "https://www.themoviedb.org/t/p/original/9ONs8SMAXtkiyaEIKATTpbwckx8.jpg",
            provider_id: 446,
            provider_name: "Retrocrush"
        },
        {
            display_priority: 64,
            logo_path: "https://www.themoviedb.org/t/p/original/pheENW1BxlexXX1CKJ4GyWudyMA.jpg",
            provider_id: 99,
            provider_name: "Shudder"
        },
        {
            display_priority: 116,
            logo_path: "https://www.themoviedb.org/t/p/original/sc5pTTCFbx7GQyOst5SG4U7nkPH.jpg",
            provider_id: 204,
            provider_name: "Shudder Amazon Channel"
        },
        {
            display_priority: 85,
            logo_path: "https://www.themoviedb.org/t/p/original/rZALpU2NvloNDBuUWX7BVBPFLDG.jpg",
            provider_id: 609,
            provider_name: "Smithsonian Channel Amazon Channel"
        },
        {
            display_priority: 13,
            logo_path: "https://www.themoviedb.org/t/p/original/xN97FFkFAdY1JvHhS4zyPD4URgD.jpg",
            provider_id: 521,
            provider_name: "Spamflix"
        },
        {
            display_priority: 82,
            logo_path: "https://www.themoviedb.org/t/p/original/h8sud4kBfHnTni7G7pTnOGcArco.jpg",
            provider_id: 606,
            provider_name: "StackTV Amazon Channel"
        },
        {
            display_priority: 218,
            logo_path: "https://www.themoviedb.org/t/p/original/x36C6aseF5l4uX99Kpse9dbPwBo.jpg",
            provider_id: 1794,
            provider_name: "Starz Amazon Channel"
        },
        {
            display_priority: 11,
            logo_path: "https://www.themoviedb.org/t/p/original/uW4dPCcbXaaFTyfL5HwhuDt5akK.jpg",
            provider_id: 309,
            provider_name: "Sun Nxt"
        },
        {
            display_priority: 68,
            logo_path: "https://www.themoviedb.org/t/p/original/pZ9TSk3wlRYwiwwRxTsQJ7t2but.jpg",
            provider_id: 143,
            provider_name: "Sundance Now"
        },
        {
            display_priority: 122,
            logo_path: "https://www.themoviedb.org/t/p/original/xImSZRKRYzIMPr4COgJNsEHdd2T.jpg",
            provider_id: 205,
            provider_name: "Sundance Now Amazon Channel"
        },
        {
            display_priority: 81,
            logo_path: "https://www.themoviedb.org/t/p/original/jqByg3hw9LsuKTxgpAQPbO9b1ZQ.jpg",
            provider_id: 605,
            provider_name: "Super Channel Amazon Channel"
        },
        {
            display_priority: 30,
            logo_path: "https://www.themoviedb.org/t/p/original/cnIHBy3uLWhHRR7VeWQhK3ZsYP0.jpg",
            provider_id: 1771,
            provider_name: "Takflix"
        },
        {
            display_priority: 78,
            logo_path: "https://www.themoviedb.org/t/p/original/3zOyRHCQuesGyoc7ZuzUMSCZh7k.jpg",
            provider_id: 589,
            provider_name: "TELETOON+ Amazon Channel"
        },
        {
            display_priority: 36,
            logo_path: "https://www.themoviedb.org/t/p/original/9nYphuoVD2doYP1Fc0Xij1j3Qdm.jpg",
            provider_id: 550,
            provider_name: "Tenk"
        },
        {
            display_priority: 105,
            logo_path: "https://www.themoviedb.org/t/p/original/ubWucXFn34TrVlJBaJFgPaC4tOP.jpg",
            provider_id: 454,
            provider_name: "Topic"
        },
        {
            display_priority: 20,
            logo_path: "https://www.themoviedb.org/t/p/original/osREemsc9uUB2J8VTkQeAVk2fu9.jpg",
            provider_id: 567,
            provider_name: "True Story"
        },
        {
            display_priority: 44,
            logo_path: "https://www.themoviedb.org/t/p/original/w2TDH9TRI7pltf5LjN3vXzs7QbN.jpg",
            provider_id: 73,
            provider_name: "Tubi TV"
        },
        {
            display_priority: 55,
            logo_path: "https://www.themoviedb.org/t/p/original/dCO5ge3nDm4LdnWSPe6jHPciE7U.jpg",
            provider_id: 488,
            provider_name: "tvo"
        },
        {
            display_priority: 88,
            logo_path: "https://www.themoviedb.org/t/p/original/e07gcWq5OWhJ8MxZncJrDuoJAp2.jpg",
            provider_id: 612,
            provider_name: "UMC Amazon Channel"
        },
        {
            display_priority: 11,
            logo_path: "https://www.themoviedb.org/t/p/original/58aUMVWJRolhWpi4aJCkGHwfKdg.jpg",
            provider_id: 457,
            provider_name: "VIX "
        },
        {
            display_priority: 15,
            logo_path: "https://www.themoviedb.org/t/p/original/mgD0T960hnYU4gBxbPPBrcDfgWg.jpg",
            provider_id: 546,
            provider_name: "WOW Presents Plus"
        },
        {
            display_priority: 14,
            logo_path: "https://www.themoviedb.org/t/p/original/oIkQkEkwfmcG7IGpRR1NB8frZZM.jpg",
            provider_id: 192,
            provider_name: "YouTube"
        },
        {
            display_priority: 31,
            logo_path: "https://www.themoviedb.org/t/p/original/6IPjvnYl6WWkIwN158qBFXCr2Ne.jpg",
            provider_id: 188,
            provider_name: "YouTube Premium"
        }
    ]
};
