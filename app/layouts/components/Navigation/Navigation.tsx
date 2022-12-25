import Logo from "@/assets/images/dark-logo.png";

import { useStyles } from "./styles";

import type { FC } from "@/types";

export const Navigation: FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <nav className={classes.navigation}>
                <div className={classes.logoContainer}>
                    <div>
                        <img
                            className={classes.logo}
                            src={Logo}
                            alt="Logo for What Are We Watching"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};
