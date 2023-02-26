import { createStyles } from "@mantine/core";

import type { ResponsiveBackgroundImageSizeProps } from "@/types";

export const useStyles = createStyles(
    (theme, { lowResSrc, highResSrc }: ResponsiveBackgroundImageSizeProps) => ({
        before: {
            "&::before": {
                content: '"•"',
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem"
            }
        },
        container: {
            display: "flex",
            position: "relative",
            height: "calc(100vw / 2.222222)",
            backgroundImage: `image-set(url("${lowResSrc}") 1x, url("${highResSrc}") 2x)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
                height: "calc(100vw / 3)"
            }
        },
        infoContainer: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            padding: "1.5rem",
            color: theme.white,
            zIndex: 200,
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
                display: "none"
            }
        },
        metaContainer: {
            fontSize: "1em",
            marginTop: "-0.25rem"
        },
        posterContainer: {
            aspectRatio: "2/3",
            display: "flex",
            padding: "0.5rem",
            position: "relative",
            height: "100%",
            zIndex: 200,
            [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                padding: "1rem"
            }
        },
        poster: {
            borderRadius: "0.5rem",
            height: "100%"
        },
        releaseDate: {
            fontSize: "1.5rem"
        },
        title: {
            fontSize: "2rem",
            margin: 0,
            marginRight: theme.spacing.sm
        }
    })
);
