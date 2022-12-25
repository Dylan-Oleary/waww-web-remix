import type { MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
    breakpoints: {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280
    },
    colors: {
        gray: [
            "#f9fafb",
            "#f3f4f6",
            "#e5e7eb",
            "#d1d5db",
            "#9ca3af",
            "#6b7280",
            "#4b5563",
            "#374151",
            "#1f2937",
            "#111827"
        ],
        primary: [
            "#e7f4fe",
            "#c5daed",
            "#a1c1de",
            "#7ca8d1",
            "#7ca8d1",
            "#4076aa",
            "#305b84",
            "#22415f",
            "#12273a",
            "#010e17"
        ]
    },
    primaryColor: "primary",
    white: "#F6F4F3",
    globalStyles: (theme) => ({
        "*, *::before, *::after": {
            boxSizing: "border-box"
        },
        "html, body": {
            height: "100%"
        },
        body: {
            backgroundColor: theme.white
        }
    })
};
