import { Modal, YouTubePlayer } from "@/components";

import { useYouTubeModalStyles } from "./styles";

import type { ModalProps, YouTubePlayerProps } from "@/components";
import type { FC } from "@/types";

export type YouTubeModalProps = ModalProps & {
    iFrameProps: YouTubePlayerProps;
};

export const YouTubeModal: FC<YouTubeModalProps> = ({
    iFrameProps,
    size = "90%",
    styles,
    ...rest
}) => {
    const { classes } = useYouTubeModalStyles();

    return (
        <Modal classNames={classes} size={size} {...rest}>
            <YouTubePlayer {...iFrameProps} />
        </Modal>
    );
};
