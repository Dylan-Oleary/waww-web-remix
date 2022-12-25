import { MantineProvider, createEmotionCache } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { MainLayout } from "@/layouts";
import { theme } from "@/styles/theme";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "What Are We Watching?!",
    viewport: "width=device-width,initial-scale=1"
});

createEmotionCache({ key: "mantine" });

export default function App() {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <html lang="en">
                <head>
                    <StylesPlaceholder />
                    <Meta />
                    <Links />
                </head>
                <body>
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        </MantineProvider>
    );
}
