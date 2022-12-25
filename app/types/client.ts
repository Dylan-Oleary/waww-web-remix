import { Form } from "@remix-run/react";

import type { FunctionComponent, ReactNode } from "react";

export type FC<T = {}> = FunctionComponent<{ children?: ReactNode } & T>;

export type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type ScreenReaderElement = Heading;
export type Theme = "primary";

export type WithTheme<T> = { theme: Theme } & T;
export type WithUseFetcher<T> = {
    data?: T;
    Form: typeof Form;
    state: "loading" | "submitting" | "idle";
    type:
        | "init"
        | "actionSubmission"
        | "actionRedirect"
        | "loaderSubmission"
        | "actionReload"
        | "normalLoad"
        | "done";
};
