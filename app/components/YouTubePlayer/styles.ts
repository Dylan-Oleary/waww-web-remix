import { createStyles } from "@mantine/core";

export const useYouTubeModalStyles = createStyles((theme) => ({
    close: {
        color: theme.white,
        "&:hover": {
            backgroundColor: theme.black
        }
    },
    header: {
        padding: "0.25rem",
        margin: 0
    },
    modal: {
        background: "#000",
        flexGrow: 1,
        padding: "0 !important"
    },
    title: {
        color: theme.white
    }
}));

export const useYouTubePlayerStyles = createStyles(() => ({
    player: {
        border: 0,
        height: "50vw",
        width: "100%",
        maxHeight: "inherit",
        maxWidth: "inherit"
    }
}));
