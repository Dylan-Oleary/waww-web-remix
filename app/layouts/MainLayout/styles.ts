import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%"
    },
    main: {
        flex: 1
    },
    mainContent: {
        marginTop: "-3rem",
        padding: "0 1.5rem"
    }
}));
