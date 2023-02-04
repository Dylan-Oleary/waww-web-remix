import { Slider as MantineSlider } from "@mantine/core";

import { useSliderStyles } from "@/components";

import type { SliderProps as MantineSliderProps } from "@mantine/core";
import type { FC, WithTheme } from "@/types";

export type SliderProps = WithTheme<MantineSliderProps>;

/**
 * @see https://mantine.dev/core/slider/
 */
export const Slider: FC<SliderProps> = ({ theme = "primary", styles, ...rest }) => {
    const { getSliderStyles } = useSliderStyles(theme, styles);

    return (
        <MantineSlider
            labelTransition="fade"
            labelTransitionDuration={150}
            labelTransitionTimingFunction="ease"
            styles={getSliderStyles}
            {...rest}
        />
    );
};
