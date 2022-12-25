import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    container: {
        border: "1px solid",
        borderColor: theme.colors.gray[7],
        borderRadius: "2px",
        color: theme.colors.gray[7],
        padding: "1px 4px",
        textTransform: "uppercase"
    }
}));
