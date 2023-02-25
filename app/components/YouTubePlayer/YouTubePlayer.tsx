import { useYouTubePlayerStyles } from "./styles";

import type { IframeHTMLAttributes } from "react";
import type { FC } from "@/types";

export type YouTubePlayerProps = {
    autoPlay?: boolean;
    className?: string;
    videoId: string;
} & IframeHTMLAttributes<Omit<HTMLIFrameElement, "src">>;

export const YouTubePlayer: FC<YouTubePlayerProps> = ({
    allowFullScreen = true,
    autoPlay = false,
    className,
    loading = "lazy",
    videoId,
    ...rest
}) => {
    const { classes, cx } = useYouTubePlayerStyles();
    const src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? "1" : "0"}&muted=1`;

    return (
        <iframe
            allow="autoplay"
            allowFullScreen={allowFullScreen}
            className={cx(classes.player, className)}
            loading={loading}
            src={src}
            {...rest}
        />
    );
};
