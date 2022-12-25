import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: theme.white,
        borderRadius: "0.5rem",
        overflow: "hidden",
        boxShadow: theme.shadows.lg
    },
    childContainer: {
        padding: "1.5rem"
    }
}));
