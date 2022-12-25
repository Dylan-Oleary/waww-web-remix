import { Avatar, Box } from "@mantine/core";
import { forwardRef } from "react";

import { useMultiSelectItemStyles } from "./styles";

import type { AvatarProps, SelectItemProps } from "@mantine/core";

export type MultiSelectItemProps = SelectItemProps & {
    imageProps?: AvatarProps;
};

export const MultiSelectItem = forwardRef<HTMLDivElement, MultiSelectItemProps>(
    ({ imageProps, label, value, ...rest }, ref) => {
        const { classes } = useMultiSelectItemStyles();

        return (
            <div ref={ref} {...rest}>
                <Box className={classes.container}>
                    {imageProps ? (
                        <Box className={classes.imageContainer}>
                            <Avatar size="sm" {...imageProps} />
                        </Box>
                    ) : null}
                    <div>{label}</div>
                </Box>
            </div>
        );
    }
);
