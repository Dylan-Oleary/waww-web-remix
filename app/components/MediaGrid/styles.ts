import { createStyles } from "@mantine/core";

export const useMediaGridStyles = createStyles(() => ({
    card: {
        height: "100%"
    }
}));

export const useMediaGridCardStyles = createStyles((theme) => ({
    anchor: {
        position: "relative",
        width: "35%",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: "100%"
        }
    },
    card: {
        padding: "0",
        display: "flex",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: "column"
        }
    },
    infoContainer: {
        padding: "0.5rem",
        width: "65%",
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            paddingTop: "1rem",
            width: "100%"
        }
    },
    mediaScoreProgress: {
        position: "absolute",
        right: 5,
        bottom: 5,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            bottom: -12
        }
    },
    overviewText: {
        display: "-webkit-box",
        fontSize: theme.fontSizes.xs,
        marginBottom: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineClamp: 2,
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        [`@media (min-width: 375px)`]: {
            lineClamp: 4,
            WebkitLineClamp: 4
        },
        [`@media (min-width: ${theme.breakpoints.xs}px)`]: {
            lineClamp: 8,
            WebkitLineClamp: 8
        },
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            display: "none"
        }
    },
    poster: {
        height: "100%"
    },
    releaseDate: {
        color: theme.colors.gray[5],
        fontSize: theme.fontSizes.xs,
        margin: 0
    },
    titleLink: {
        color: "inherit",
        textDecoration: "none",
        "&:visited": {
            color: "inherit"
        }
    },
    titleText: {
        color: theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        margin: 0,
        "&:hover": {
            color: theme.colors.gray[5]
        }
    }
}));
