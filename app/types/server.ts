import type { PaginationProps } from "@/components";

export type PaginationData = Pick<PaginationProps, "page" | "total"> & { numOfResults?: number };
