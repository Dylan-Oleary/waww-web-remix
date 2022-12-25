import { Grid } from "@/layouts";

import { Alert, MediaGridCard } from "@/components";
import { TmdbMediumEnumSchema } from "@/schema";

import { useMediaGridStyles } from "./styles";

import type { GridProps } from "@/layouts";
import type { TmdbDiscoverMoviesResultRecord, TmdbMediumEnum } from "@/schema";
import type { FC } from "@/types";

export type MediaGridProps = Omit<GridProps, "children"> & {
    data: TmdbDiscoverMoviesResultRecord[];
    medium: TmdbMediumEnum;
};

export const MediaGrid: FC<MediaGridProps> = ({
    data = [],
    medium = TmdbMediumEnumSchema.Enum.movie,
    ...rest
}) => {
    const { classes } = useMediaGridStyles();

    if (!data || data?.length === 0) {
        return (
            <Alert title="Bummer!" color="primary">
                We couldn't find anything to watch – try adjusting the filters.
            </Alert>
        );
    }

    return (
        <Grid gutter="md" {...rest}>
            {data?.map((media) => (
                <Grid.Col key={media.id} span={12} sm={4} lg={3}>
                    <MediaGridCard className={classes.card} data={media} withRating />
                </Grid.Col>
            ))}
        </Grid>
    );
};
