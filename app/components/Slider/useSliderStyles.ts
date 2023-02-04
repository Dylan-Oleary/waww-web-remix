import { useCallback } from "react";

import type { MantineTheme, SliderStylesNames, Styles } from "@mantine/core";
import type { RangeSliderStylesNames } from "@mantine/core/lib/Slider/RangeSlider/RangeSlider";
import type { Theme } from "@/types";

export type SliderStyles<T> = T extends "range"
    ? Styles<RangeSliderStylesNames>
    : Styles<SliderStylesNames>;

export type UseSliderStylesReturnType<T> = {
    getSliderStyles: (theme: MantineTheme) => Partial<SliderStyles<T>>;
};

export const useSliderStyles: <T = "base">(
    theme: Theme,
    styles?: SliderStyles<T>
) => UseSliderStylesReturnType<T> = (theme, styles = {}) => {
    const getSliderStyles = useCallback(
        (mantineTheme: MantineTheme) => {
            const baseStyles: typeof styles = {
                ...styles,
                thumb: {
                    backgroundColor: mantineTheme.white,
                    borderWidth: 1
                }
            };

            switch (theme) {
                case "primary":
                default:
                    return baseStyles;
            }
        },
        [theme]
    );

    return { getSliderStyles };
};
