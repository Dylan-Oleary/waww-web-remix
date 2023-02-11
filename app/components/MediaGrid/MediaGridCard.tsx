import { Link } from "@remix-run/react";
import dayjs from "dayjs";

import { Card, Image, MediaScoreProgress, Text } from "@/components";
import { AspectRatio } from "@/layouts";
import { DayJsDateFormatEnumSchema } from "@/schema";

import { useMediaGridCardStyles } from "./styles";

import type { CardProps } from "@/components";
import type { TmdbDiscoverMoviesResultRecord } from "@/schema";
import type { FC } from "@/types";

export type MediaGridCardProps = Omit<CardProps, "childContainerClassName"> & {
    data: TmdbDiscoverMoviesResultRecord;
    withRating?: boolean;
};

export const MediaGridCard: FC<MediaGridCardProps> = ({ data, withRating = false, ...rest }) => {
    const { classes } = useMediaGridCardStyles();
    const { id, overview, poster_path, release_date, title, vote_average } = data;
    const recordPageLink = `/movies/${id}`;

    return (
        <Link className={classes.anchor} to={recordPageLink}>
            <Card childContainerClassName={classes.card} {...rest}>
                <div className={classes.posterContainer}>
                    <AspectRatio className={classes.poster} ratio={2 / 3}>
                        <Image
                            alt={`Poster for ${title}`}
                            // TODO: Build image links on server
                            // https://developers.themoviedb.org/3/getting-started/images
                            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        />
                    </AspectRatio>
                    {withRating ? (
                        <MediaScoreProgress
                            className={classes.mediaScoreProgress}
                            score={vote_average}
                        />
                    ) : null}
                </div>
                <div className={classes.infoContainer}>
                    <Text className={classes.titleText} component="h2" lineClamp={2}>
                        {title}
                    </Text>
                    <Text className={classes.releaseDate} component="p">
                        {dayjs(release_date).format(DayJsDateFormatEnumSchema.Enum["MMM DD, YYYY"])}
                    </Text>
                    {!!overview ? (
                        <Text className={classes.overviewText} component="p">
                            {overview}
                        </Text>
                    ) : null}
                </div>
            </Card>
        </Link>
    );
};
