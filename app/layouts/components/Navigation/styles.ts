import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: theme.colors.primary[8],
        paddingBottom: "4rem"
    },
    logo: {
        height: "6rem",
        width: "auto"
    },
    logoContainer: {
        alignItems: "center",
        display: "flex",
        height: "8rem"
    },
    navigation: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: theme.breakpoints.xl,
        padding: "0 0.5rem",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            padding: "0 1rem"
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            padding: "0 2rem"
        }
    }
}));
