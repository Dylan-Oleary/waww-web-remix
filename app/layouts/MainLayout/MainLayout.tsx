import { Footer, Navigation } from "@/layouts";

import { useStyles } from "./styles";

import type { FC } from "@/types";

export const MainLayout: FC = ({ children }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <Navigation />
            <main className={classes.main}>
                <div className={classes.mainContent}>{children}</div>
            </main>
            <Footer />
        </div>
    );
};
