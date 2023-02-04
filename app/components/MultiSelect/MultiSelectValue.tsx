import { Avatar, Box, CloseButton } from "@mantine/core";

import { useMultiSelectValueStyles } from "./styles";

import type { AvatarProps, MultiSelectValueProps } from "@mantine/core";
import type { FC } from "@/types";

export type MultiSelectProps = MultiSelectValueProps & {
    imageProps?: AvatarProps;
};

export const MultiSelectValue: FC<MultiSelectProps> = ({
    className,
    imageProps,
    label,
    onRemove,
    // Ignore classNames and styles
    classNames,
    styles,
    ...rest
}) => {
    const { classes, cx } = useMultiSelectValueStyles();

    return (
        <Box className={cx(classes.container, className)} {...rest}>
            {imageProps ? (
                <Box className={classes.imageContainer}>
                    <Avatar size="xs" {...imageProps} />
                </Box>
            ) : null}
            <Box className={classes.label}>{label}</Box>
            <CloseButton
                onMouseDown={onRemove}
                variant="transparent"
                size={22}
                iconSize={14}
                tabIndex={-1}
            />
        </Box>
    );
};
