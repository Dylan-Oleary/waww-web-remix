import { memo } from "react";

import { Stat } from "@/components";
import { Stack } from "@/layouts";
import { formatCurrency } from "@/utils";

import type { StackProps } from "@/layouts";
import type { FC } from "@/types";

export type MediaStats = {
    budget?: number;
    className?: string;
    revenue?: number;
    status?: string;
} & StackProps;

export const MediaStats: FC<MediaStats> = memo(
    ({ budget, className, revenue, spacing = 16, status }) => {
        return (
            <Stack className={className} spacing={spacing}>
                <Stat label="Status" value={!!status ? status : null} />
                <Stat label="Budget" value={!!budget ? formatCurrency(budget) : null} />
                <Stat label="Revenue" value={!!revenue ? formatCurrency(revenue) : null} />
            </Stack>
        );
    }
);
