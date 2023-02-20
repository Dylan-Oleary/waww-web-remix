import { Text } from "@/components";

import { useStatStyles } from "./styles";

import type { FC } from "@/types";

export type StatProps = {
    className?: string;
    label: string;
    value: string | null;
};

export const Stat: FC<StatProps> = ({ className, label, value }) => {
    const { classes } = useStatStyles();

    return (
        <div className={className}>
            <Text className={classes.label} component="strong">
                {label}
            </Text>
            <Text className={classes.value} component="p">
                {!!value ? value : <>&ndash;</>}
            </Text>
        </div>
    );
};
