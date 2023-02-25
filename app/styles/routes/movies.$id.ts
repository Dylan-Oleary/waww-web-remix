import { createStyles } from "@mantine/core";

import type { ResponsiveBackgroundImageSizeProps } from "@/types";

export const useStyles = createStyles(
    (theme, { lowResSrc, highResSrc }: ResponsiveBackgroundImageSizeProps) => ({
        backdrop: {
            position: "relative",
            height: "calc(100vw / 2.222222)",
            backgroundImage: `image-set(url("${lowResSrc}") 1x, url("${highResSrc}") 2x)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
                height: "calc(100vw / 3)"
            }
        },
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
        posterContainer: {
            aspectRatio: "2/3",
            display: "flex",
            padding: "1rem",
            position: "relative",
            height: "100%",
            zIndex: 200
        },
        poster: {
            borderRadius: "0.5rem",
            height: "100%"
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
    })
);
