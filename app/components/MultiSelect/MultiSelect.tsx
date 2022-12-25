import { MultiSelect as MantineMultiSelect, MultiSelectProps } from "@mantine/core";

import { MultiSelectItem, MultiSelectValue } from "@/components";

import type { FC } from "@/types";

/**
 * @see https://mantine.dev/core/multi-select/
 */
export const MultiSelect: FC<MultiSelectProps> = ({
    clearSearchOnBlur = true,
    transition = "fade",
    transitionDuration = 150,
    transitionTimingFunction = "ease",
    ...rest
}) => {
    return (
        <MantineMultiSelect
            clearSearchOnBlur={clearSearchOnBlur}
            itemComponent={MultiSelectItem}
            styles={(theme) => ({
                item: {
                    "&:hover": {
                        backgroundColor: theme.colors.gray[2]
                    }
                },
                value: {
                    backgroundColor: theme.colors.gray[2]
                }
            })}
            transition={transition}
            transitionDuration={transitionDuration}
            transitionTimingFunction={transitionTimingFunction}
            valueComponent={MultiSelectValue}
            {...rest}
        />
    );
};
