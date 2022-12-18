export const convertObjectToUrlSearchParams = (obj: Record<string, unknown>): URLSearchParams => {
    const cleanObj: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        if (value !== undefined && value !== null) {
            cleanObj[key] = String(value);
        }
    }

    return new URLSearchParams(cleanObj);
};
