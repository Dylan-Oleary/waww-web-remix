import { createStyles } from "@mantine/core";

export const useMultiSelectItemStyles = createStyles(() => ({
    container: {
        alignItems: "center",
        display: "flex"
    },
    imageContainer: {
        marginRight: 10
    }
}));

export const useMultiSelectValueStyles = createStyles((theme) => ({
    container: {
        display: "flex",
        color: theme.colors.gray[7],
        cursor: "default",
        alignItems: "center",
        backgroundColor: theme.colors.gray[2],
        paddingLeft: 10,
        borderRadius: 4
    },
    imageContainer: {
        marginRight: 5
    },
    label: {
        fontSize: 12,
        lineHeight: 1
    }
}));
