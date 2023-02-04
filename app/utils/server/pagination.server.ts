import type { PaginationData } from "@/types";

export type BuildPaginationArgs = {
    page: number;
    totalPages: number;
    numOfResults: number;
};

export const buildPagination = (args: BuildPaginationArgs): PaginationData | null => {
    if (!args) return null;

    const { numOfResults, page, totalPages } = args;

    if (!!!page || !!!totalPages || !!!numOfResults) return null;

    return {
        numOfResults,
        page,
        total: totalPages
    };
};
