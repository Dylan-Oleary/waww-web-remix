import { z } from "zod";

export const DiscoverMoviesFormSchemaConfig = {
    page: {
        defaultValue: 1
    },
    certifications: {
        defaultValue: []
    },
    include_adult: {
        default: null
    },
    "vote_average.gte": {
        defaultValue: 65,
        min: 0,
        max: 100
    },
    with_genres: {
        defaultValue: []
    },
    get "with_runtime.lte"() {
        return {
            defaultValue: [
                this["with_runtime.lte_from"].defaultValue,
                this["with_runtime.lte_to"].defaultValue
            ]
        };
    },
    "with_runtime.lte_from": {
        defaultValue: 60,
        min: 0,
        max: 179
    },
    "with_runtime.lte_to": {
        defaultValue: 120,
        min: 1,
        max: 180
    },
    with_watch_providers: {
        defaultValue: []
    }
};

export const DiscoverMoviesFormDataSchema = z
    .object({
        page: z.coerce.number().int().min(1).default(1),
        certifications: z
            .array(z.string())
            .transform((values) => values.map((value) => value?.trim()))
            .default(DiscoverMoviesFormSchemaConfig["certifications"].defaultValue),
        include_adult: z.string().regex(/^on$/).optional(),
        "vote_average.gte": z.coerce
            .number()
            .int()
            .min(DiscoverMoviesFormSchemaConfig["vote_average.gte"].min)
            .max(DiscoverMoviesFormSchemaConfig["vote_average.gte"].max)
            .default(DiscoverMoviesFormSchemaConfig["vote_average.gte"].defaultValue),
        with_genres: z
            .array(z.string())
            .transform((values) => values.map((value) => value?.trim()))
            .default(DiscoverMoviesFormSchemaConfig["with_genres"].defaultValue),
        "with_runtime.lte_from": z.coerce
            .number()
            .int()
            .min(DiscoverMoviesFormSchemaConfig["with_runtime.lte_from"].min)
            .max(DiscoverMoviesFormSchemaConfig["with_runtime.lte_from"].max)
            .default(DiscoverMoviesFormSchemaConfig["with_runtime.lte_from"].defaultValue),
        "with_runtime.lte_to": z.coerce
            .number()
            .int()
            .min(DiscoverMoviesFormSchemaConfig["with_runtime.lte_to"].min)
            .max(DiscoverMoviesFormSchemaConfig["with_runtime.lte_to"].max)
            .default(DiscoverMoviesFormSchemaConfig["with_runtime.lte_to"].defaultValue),
        with_watch_providers: z
            .array(z.string())
            .transform((values) => values.map((value) => value?.trim()))
            .default(DiscoverMoviesFormSchemaConfig["with_watch_providers"].defaultValue)
    })
    .transform((obj) => {
        if (obj["with_runtime.lte_from"] >= obj["with_runtime.lte_to"]) {
            obj["with_runtime.lte_from"] = 0;
        }

        return obj;
    });
export type DiscoverMoviesFormData = z.infer<typeof DiscoverMoviesFormDataSchema>;
