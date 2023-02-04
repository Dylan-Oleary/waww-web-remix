import { useStyles } from "./styles";

import type { FC } from "@/types";

export const Footer: FC = () => {
    const { classes } = useStyles();

    return (
        <footer>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <span className={classes.date}>
                        &#169; {new Date().getFullYear()} theonlydevsever
                    </span>
                    <div className={classes.tmdbInfoWrapper}>
                        <div className={classes.tmdbDisclaimer}>
                            This product uses the TMDB API but is not endorsed or certified by TMDB.
                        </div>
                        <a
                            className={classes.tmdbLink}
                            href="https://www.themoviedb.org/"
                            target="_blank"
                        >
                            <img
                                className={classes.tmdbLogo}
                                src="/assets/svg/tmdb-logo.svg"
                                alt="Logo for The Movie Database"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
