import { ClientProvider } from "@mantine/remix";
import { RemixBrowser } from "@remix-run/react";
import { StrictMode } from "react";
import { hydrate } from "react-dom";

function hydrateDOM() {
    hydrate(
        <StrictMode>
            <ClientProvider>
                <RemixBrowser />
            </ClientProvider>
        </StrictMode>,
        document.getElementById("root")
    );
}

if (window.requestIdleCallback) {
    window.requestIdleCallback(hydrateDOM);
} else {
    // Safari doesn't support requestIdleCallback
    // https://caniuse.com/requestidlecallback
    window.setTimeout(hydrateDOM, 1);
}
