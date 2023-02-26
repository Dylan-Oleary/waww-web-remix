import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        padding: 0
    },
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
    mobileHeaderInfo: {
        padding: theme.spacing.lg
    },
    mobileScoreRow: {
        padding: theme.spacing.lg
    },
    divider: {
        height: "50%",
        alignSelf: "center"
    },
    mobileScoreColumn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mobileGenreWrapper: {
        backgroundColor: theme.colors.gray[2],
        display: "flex",
        justifyContent: "center",
        padding: 10
    },
    mobileOverview: {
        fontSize: "1.25em",
        marginBottom: "0.25rem"
    },
    mobileTitle: {
        fontSize: "1.5rem",
        margin: 0,
        padding: 0,
        textAlign: "center"
    },
    releaseDate: {
        fontSize: "1rem",
        textAlign: "center",
        marginTop: -5
    },
    tagline: {
        fontSize: "1em",
        fontWeight: 400
    },
    ringScore: {
        fontSize: "1.5em"
    },
    flex: {
        display: "flex",
        alignItems: "center"
    }
}));
