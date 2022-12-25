import { ComponentPropsWithoutRef, forwardRef, ForwardRefRenderFunction } from "react";

import { CertificationLogo, Text } from "@/components";
import { Grid } from "@/layouts";

import { useStyles } from "./styles";

export type CertificationSelectItemData = {
    description?: string;
    label: string;
    value: string;
};

export type CertificationSelectItemProps = ComponentPropsWithoutRef<"div"> &
    CertificationSelectItemData;

const SelectItemComponent: ForwardRefRenderFunction<
    HTMLDivElement,
    CertificationSelectItemProps
> = ({ description = "", label, ...rest }, forwardRef) => {
    const { classes } = useStyles();

    return (
        <div ref={forwardRef} {...rest}>
            <Grid>
                <Grid.Col className={classes.logoContainer} span={2}>
                    <CertificationLogo certification={label} />
                </Grid.Col>
                <Grid.Col span={10}>
                    <Text size="xs" pl={2}>
                        {description}
                    </Text>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export const CertificationSelectItem = forwardRef(SelectItemComponent);
