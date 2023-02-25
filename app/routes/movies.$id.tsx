import { useLoaderData } from "@remix-run/react";
import dayjs from "dayjs";
import { useState } from "react";

import {
    Button,
    Card,
    MediaScoreProgress,
    MediaStats,
    Stat,
    Text,
    YouTubeModal
} from "@/components";
import { Stack } from "@/layouts";
import { singleMovieRouteLoader } from "@/loaders";
import { DayJsDateFormatEnumSchema } from "@/schema";
import { useStyles } from "@/styles/routes/movies.$id";

import type { SingleMovieRouteLoaderData } from "@/loaders";
import { Divider, Grid, Overlay } from "@mantine/core";

//TODO - Mobile Only Info Component
export { singleMovieRouteLoader as loader };
export default function Index() {
    const [isYouTubeModalOpen, setIsYouTubeModalOpen] = useState<boolean>(false);
    const { media, movie, posterPrimaryColor } = useLoaderData<SingleMovieRouteLoaderData>();
    const {
        budget,
        credits,
        genres = [],
        overview,
        release_date,
        revenue,
        status,
        tagline,
        title,
        vote_average
    } = movie;
    const trailer = movie?.videos?.results?.[0];
    const { backgroundImageProps, posterImgProps } = media;
    const { classes } = useStyles(backgroundImageProps);
    const { red, blue, green } = posterPrimaryColor;

    return (
        <div className={classes.container}>
            <Card childContainerClassName={classes.card}>
                <div className={classes.backdrop}>
                    <Overlay
                        gradient={`linear-gradient(to right, rgba(${red},${green},${blue}, 1) 20%, rgba(${red},${green},${blue}, 0) 50%)`}
                        opacity={1}
                    />
                    <div className={classes.posterContainer}>
                        <img
                            alt={`Poster for ${title}`}
                            className={classes.poster}
                            {...posterImgProps}
                        />
                    </div>
                </div>
                <Stack pt={8}>
                    <div>
                        <Text align="center" className={classes.mobileTitle} component="h2">
                            {title}
                        </Text>
                        <Text className={classes.releaseDate} component="div">
                            ({dayjs(release_date).format(DayJsDateFormatEnumSchema.Enum["YYYY"])})
                        </Text>
                    </div>
                    <Grid className={classes.mobileScoreRow}>
                        <Grid.Col span={trailer ? 4 : 12} className={classes.mobileScoreColumn}>
                            <MediaScoreProgress
                                className={classes.ringScore}
                                score={vote_average}
                                size={55}
                            />
                            <Text ml={4}>User Score</Text>
                        </Grid.Col>
                        {trailer ? (
                            <>
                                <Grid.Col className={classes.mobileScoreColumn} span={4}>
                                    <Divider
                                        className={classes.divider}
                                        size={2}
                                        orientation="vertical"
                                    />
                                </Grid.Col>
                                <Grid.Col span={4} className={classes.mobileScoreColumn}>
                                    {trailer ? (
                                        <Button onClick={() => setIsYouTubeModalOpen(true)}>
                                            Play Trailer
                                        </Button>
                                    ) : null}
                                </Grid.Col>
                            </>
                        ) : null}
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
                        {credits?.crew && credits?.crew.length > 0 ? (
                            <Grid m={0}>
                                {credits.crew.map(({ id, job, name }) => (
                                    <Grid.Col key={`crew_${id}`} px={0} span={6}>
                                        <Stat label={name} value={job} />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        ) : null}
                    </div>
                    <div className={classes.mobileHeaderInfo}>
                        <MediaStats budget={budget} revenue={revenue} status={status} />
                    </div>
                </Stack>
            </Card>
            {/* Modals */}
            {trailer ? (
                <YouTubeModal
                    centered
                    iFrameProps={{
                        autoPlay: true,
                        name: "Media Trailer",
                        videoId: trailer.key
                    }}
                    onClose={() => setIsYouTubeModalOpen(false)}
                    opened={isYouTubeModalOpen}
                />
            ) : null}
        </div>
    );
}
