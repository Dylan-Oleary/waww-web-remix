export const convertObjectToUrlSearchParams = (obj: Record<string, unknown>): URLSearchParams => {
    const cleanObj: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined && value !== null) {
            cleanObj[key] = String(value);
        }
    }

    return new URLSearchParams(cleanObj);
};

export const convertUrlParamsToJSON = <T extends Record<string, unknown>>(
    url: string
): Record<keyof T, string> =>
    Object.fromEntries<keyof T>(new URL(url).searchParams) as Record<keyof T, string>;
