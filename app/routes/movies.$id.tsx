import { useLoaderData } from "@remix-run/react";

import { Card, MediaScoreProgress, Text } from "@/components";
import { Stack } from "@/layouts";
import { singleMovieRouteLoader } from "@/loaders";
import { DayJsDateFormatEnumSchema } from "@/schema";
import { useStyles } from "@/styles/routes/movies.$id";

import type { SingleMovieRouteLoaderData } from "@/loaders";
import { Divider, Grid, Overlay } from "@mantine/core";
import dayjs from "dayjs";

export { singleMovieRouteLoader as loader };
export default function Index() {
    const { classes } = useStyles();
    const { movie, posterPrimaryColor } = useLoaderData<SingleMovieRouteLoaderData>();
    const {
        backdrop_path,
        budget,
        genres = [],
        overview,
        poster_path,
        release_date,
        revenue,
        status,
        tagline,
        title,
        vote_average
    } = movie;
    const { red, blue, green } = posterPrimaryColor;

    return (
        <div className={classes.container}>
            <Card childContainerClassName={classes.card}>
                <div
                    className={classes.mediaHeader}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
                    }}
                >
                    <Overlay
                        gradient={`linear-gradient(to right, rgba(${red},${green},${blue}, 1) 32%, rgba(${red},${green},${blue}, 0) 50%)`}
                        opacity={1}
                    />
                    <div className={classes.posterContainer}>
                        <img
                            alt={`Poster for ${title}`}
                            className={classes.poster}
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        />
                    </div>
                </div>
                <Stack>
                    <div>
                        <Text align="center" className={classes.mobileTitle} component="h2">
                            {title}
                        </Text>
                        <Text className={classes.releaseDate} component="div">
                            ({dayjs(release_date).format(DayJsDateFormatEnumSchema.Enum["YYYY"])})
                        </Text>
                    </div>
                    <Grid className={classes.mobileScoreRow}>
                        <Grid.Col span={4} className={classes.mobileScoreColumn}>
                            <MediaScoreProgress
                                className={classes.ringScore}
                                score={vote_average}
                                size={55}
                            />
                            <Text ml={4}>User Score</Text>
                        </Grid.Col>
                        <Grid.Col className={classes.mobileScoreColumn} span={4}>
                            <Divider className={classes.divider} size={2} orientation="vertical" />
                        </Grid.Col>
                        <Grid.Col span={4} className={classes.mobileScoreColumn}>
                            <Text>Play Trailer</Text>
                        </Grid.Col>
                    </Grid>
                    <div className={classes.mobileGenreWrapper}>
                        <Text>{genres.map(({ name }) => name).join(", ")}</Text>
                    </div>
                    <div className={classes.mobileHeaderInfo}>
                        {tagline ? (
                            <Text className={classes.tagline} component="h3" italic>
                                {tagline}
                            </Text>
                        ) : null}
                        {overview ? (
                            <div>
                                <Text className={classes.mobileOverview} component="h3">
                                    Overview
                                </Text>
                                <Text component="p" m={0}>
                                    {overview}
                                </Text>
                            </div>
                        ) : null}
                    </div>
                    <div className={classes.mobileHeaderInfo}>
                        <div>
                            <Text component="strong">Status</Text>
                            <Text component="p" m={0}>
                                {status}
                            </Text>
                        </div>
                        <div>
                            <Text component="strong">Budget</Text>
                            <Text component="p" m={0}>
                                {budget}
                            </Text>
                        </div>
                        <div>
                            <Text component="strong">Revenue</Text>
                            <Text component="p" m={0}>
                                {revenue}
                            </Text>
                        </div>
                    </div>
                </Stack>
            </Card>
        </div>
    );
}
