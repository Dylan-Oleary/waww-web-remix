import { MantineProvider } from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import { MainLayout } from "@/layouts";
import { CustomFonts, theme } from "@/styles";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "What Are We Watching?!",
    viewport: "width=device-width,initial-scale=1"
});

export default function App() {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <html lang="en">
                <head>
                    <Meta />
                    <Links />
                    <StylesPlaceholder />
                </head>
                <body>
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
                    <CustomFonts />
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </body>
            </html>
        </MantineProvider>
    );
}
