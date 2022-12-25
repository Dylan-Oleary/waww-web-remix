import { createStyles } from "@mantine/core";

export const useMediaScoreProgressStyles = createStyles((theme) => ({
    progressRing: {
        "&.mantine-RingProgress-root": {
            backgroundColor: theme.colors.dark[6],
            borderRadius: 99
        }
    },
    progressRingLabel: {
        display: "flex",
        alignItems: "center",
        color: "white",
        fontSize: "0.75em",
        justifyContent: "center"
    }
}));
