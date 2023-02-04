import { useStyles } from "./styles";

import type { FC } from "@/types";

export type CardProps = {
    className?: string;
    childContainerClassName?: string;
};

export const Card: FC<CardProps> = ({ className = "", childContainerClassName = "", children }) => {
    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.container, className)}>
            <div className={cx(classes.childContainer, childContainerClassName)}>{children}</div>
        </div>
    );
};
