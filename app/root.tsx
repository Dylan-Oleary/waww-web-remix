import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

import appStyles from "@/styles/app.css";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: appStyles }];

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "What Are We Watching?!",
    viewport: "width=device-width,initial-scale=1"
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
