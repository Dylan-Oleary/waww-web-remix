import { buildPagination } from "./pagination.server";

import type { BuildPaginationArgs } from "./pagination.server";
import type { PaginationData } from "../../types/server";

describe("Pagination Utils", () => {
    describe("buildPagination", () => {
        const DEFAULT_PAGINATION: BuildPaginationArgs = {
            numOfResults: 100,
            page: 1,
            totalPages: 10
        };
        const paginationKeys: (keyof BuildPaginationArgs)[] = [
            "numOfResults",
            "page",
            "totalPages"
        ];

        for (const key of paginationKeys) {
            it.each<unknown>([0, undefined, null])(`return null when the ${key} is %s`, (value) => {
                expect(buildPagination({ ...DEFAULT_PAGINATION, [key]: value })).toBe(null);
            });
        }

        it("returns null when no args are passed", () => {
            //@ts-ignore - Testing invalid args
            expect(buildPagination()).toBe(null);
        });

        it("returns the expected data", () => {
            const expected: PaginationData = {
                numOfResults: DEFAULT_PAGINATION.numOfResults,
                page: DEFAULT_PAGINATION.page,
                total: DEFAULT_PAGINATION.totalPages
            };

            expect(buildPagination(DEFAULT_PAGINATION)).toEqual(expected);
        });
    });
});
