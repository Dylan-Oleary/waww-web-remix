import { Text } from "@/components";

import { useStyles } from "./styles";

import type { TextProps } from "@/components";
import type { FC } from "@/types";

export type CertificationLogoProps = TextProps & {
    certification: string;
};

export const CertificationLogo: FC<CertificationLogoProps> = ({ certification, ...rest }) => {
    const { classes } = useStyles();

    return (
        <Text className={classes.container} {...rest}>
            {certification}
        </Text>
    );
};
