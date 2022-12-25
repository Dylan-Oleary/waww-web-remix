import { useMemo } from "react";

import { RingProgress, Text } from "@/components";
import { useTheme } from "@/hooks";
import { convertVoteAverageToScore } from "@/utils";

import { useMediaScoreProgressStyles } from "./styles";

import type { RingProgressProps } from "@/components";
import type { FC } from "@/types";

export type MediaScorePrgressProps = {
    className?: string;
    labelClassName?: string;
    score: number;
} & Omit<RingProgressProps, "sections" | "label">;

export const MediaScoreProgress: FC<MediaScorePrgressProps> = ({
    className = "",
    labelClassName = "",
    score = 0,
    ...rest
}) => {
    const { classes, cx } = useMediaScoreProgressStyles();
    const {
        colors: { green }
    } = useTheme();
    const valueProps: Pick<RingProgressProps, "label" | "sections"> = useMemo(() => {
        const formattedScore = convertVoteAverageToScore(score);

        return {
            label: (
                <Text className={cx(classes.progressRingLabel, labelClassName)}>
                    {formattedScore}
                </Text>
            ),
            sections: [
                { value: formattedScore, color: green[6] },
                { value: 100 - formattedScore, color: green[1] }
            ]
        };
    }, [labelClassName, score]);

    return (
        <RingProgress
            className={cx(classes.progressRing, className)}
            size={40}
            thickness={4}
            {...valueProps}
            {...rest}
        />
    );
};
