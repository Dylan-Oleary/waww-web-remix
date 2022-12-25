import { RangeSlider as MantineRangeSlider } from "@mantine/core";

import { useSliderStyles } from "@/components";

import type { RangeSliderProps as MantineRangeSliderProps } from "@mantine/core";
import type { FC, WithTheme } from "@/types";

export type RangeSliderProps = WithTheme<MantineRangeSliderProps>;

/**
 * @see https://mantine.dev/core/slider/
 */
export const RangeSlider: FC<RangeSliderProps> = ({ theme = "primary", styles, ...rest }) => {
    const { getSliderStyles } = useSliderStyles<"range">(theme, styles);

    return (
        <MantineRangeSlider
            labelTransition="fade"
            labelTransitionDuration={150}
            labelTransitionTimingFunction="ease"
            styles={getSliderStyles}
            {...rest}
        />
    );
};
