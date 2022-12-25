import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "48rem",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            padding: "0 1.5rem"
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            padding: "0 2rem",
            maxWidth: "80rem"
        }
    },
    drawerTrigger: {
        boxShadow: theme.shadows.lg,
        position: "fixed",
        right: 10,
        bottom: 10
    },
    formCard: {
        position: "sticky",
        top: theme.spacing.md
    },
    formColumn: {
        display: "none",
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            display: "block"
        }
    },
    mobileOnly: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            display: "none"
        }
    },
    resultsCard: {
        minHeight: "100%",
        padding: 0
    },
    resultsCardContainer: {
        padding: "0.75rem",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            padding: "1.5rem"
        }
    }
}));
