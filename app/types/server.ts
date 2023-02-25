import type { ImgHTMLAttributes } from "react";

import type { PaginationProps } from "@/components";

export type PaginationData = Pick<PaginationProps, "page" | "total"> & { numOfResults?: number };
export type ResponsiveBackgroundImageSizeProps = {
    lowResSrc: string;
    highResSrc: string;
};
export type ResponsiveImageSizeProps = Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    "sizes" | "src" | "srcSet"
>;
