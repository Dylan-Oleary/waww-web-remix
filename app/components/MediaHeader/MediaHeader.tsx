import dayjs from "dayjs";
import { useState } from "react";

import { Button, MediaScoreProgress, Overlay, Stat, Text, YouTubeModal } from "@/components";
import { useTheme } from "@/hooks";
import { DayJsDateFormatEnumSchema } from "@/schema";
import { formatRuntime } from "@/utils";

import { useStyles } from "./styles";

import type { TmdbMovieExtended } from "@/schema";
import type { FC, ResponsiveBackgroundImageSizeProps, ResponsiveImageSizeProps } from "@/types";
import { Flex } from "@mantine/core";

export type MediaHeaderProps = {
    assets: {
        backgroundImage: ResponsiveBackgroundImageSizeProps;
        posterImage: ResponsiveImageSizeProps;
    };
    media: TmdbMovieExtended;
};

export const MediaHeader: FC<MediaHeaderProps> = ({ assets, media }) => {
    const {
        credits,
        genres = [],
        overview,
        release_date,
        runtime,
        tagline,
        title,
        vote_average
    } = media;
    const trailer = media?.videos?.results?.[0];
    const { backgroundImage, posterImage } = assets;
    const [isYouTubeModalOpen, setIsYouTubeModalOpen] = useState<boolean>(false);
    const { classes } = useStyles(backgroundImage);
    const theme = useTheme();

    return (
        <div className={classes.container}>
            <Overlay color={theme.black} opacity={0.65} />
            <div className={classes.posterContainer}>
                <img alt={`Poster for ${title}`} className={classes.poster} {...posterImage} />
            </div>
            <div className={classes.infoContainer}>
                <Flex align="center">
                    <Text className={classes.title} component="h2">
                        {title}
                    </Text>
                    <Text className={classes.releaseDate} component="span">
                        ({dayjs(release_date).format(DayJsDateFormatEnumSchema.Enum["YYYY"])})
                    </Text>
                </Flex>
                <Flex className={classes.metaContainer}>
                    <Text component="span">
                        {dayjs(release_date).format(DayJsDateFormatEnumSchema.Enum["YYYY-MM-DD"])}
                    </Text>
                    {genres?.length > 0 ? (
                        <Text className={classes.before} component="span">
                            {genres.map(({ name }) => name).join(", ")}
                        </Text>
                    ) : null}
                    {runtime ? (
                        <Text className={classes.before} component="span">
                            {formatRuntime(runtime)}
                        </Text>
                    ) : null}
                </Flex>
                <Flex align="center" gap={16} mt={16}>
                    <MediaScoreProgress score={vote_average} size={75} />
                    {trailer ? (
                        <Button onClick={() => setIsYouTubeModalOpen(true)}>Play Trailer</Button>
                    ) : null}
                </Flex>
                {tagline ? (
                    <div>
                        <Text component="h3" italic weight="lighter">
                            {tagline}
                        </Text>
                    </div>
                ) : null}
                {overview ? (
                    <div>
                        <Text component="h3">Overview</Text>
                        <Text component="p">{overview}</Text>
                    </div>
                ) : null}
                {credits?.crew && credits.crew.length > 0 ? (
                    <Flex gap={32}>
                        {credits.crew.map(({ id, job, name }) => (
                            <Stat key={`crew_${id}`} label={name} value={job} />
                        ))}
                    </Flex>
                ) : null}
            </div>
            {/* Modal */}
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
};
