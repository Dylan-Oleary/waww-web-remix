import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
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
    },
    container: {
        borderColor: theme.colors.primary[8],
        borderTopWidth: "1px",
        color: theme.colors.gray[5],
        display: "flex",
        flexDirection: "column",
        fontSize: "0.875rem",
        justifyContent: "space-between",
        lineHeight: "1.25rem",
        padding: "2rem 0",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            textAlign: "left"
        },
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            flexDirection: "row"
        }
    },
    date: {
        textAlign: "center",
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            textAlign: "left"
        }
    },
    tmdbInfoWrapper: {
        display: "flex",
        flexDirection: "column",
        marginTop: "0.5rem",
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            marginTop: 0
        }
    },
    tmdbDisclaimer: {
        marginBottom: "0.25rem",
        textAlign: "center",
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            textAlign: "right"
        }
    },
    tmdbLink: {
        alignSelf: "center",
        display: "inline-block",
        height: "1rem",
        marginTop: "0.25rem",
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
            alignSelf: "end",
            marginTop: 0
        }
    },
    tmdbLogo: {
        height: "1rem"
    }
}));
