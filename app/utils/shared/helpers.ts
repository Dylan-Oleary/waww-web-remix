export const getRandomKeyValuePairFromObject = (
    obj: Record<string, unknown>
): [string, unknown] => {
    const objectKeys = Object.keys(obj);
    const numberOfKeys = objectKeys.length ?? 0;

    if (numberOfKeys <= 0) {
        throw new Error("Passed object has no keys");
    }

    const randomIndex = numberOfKeys === 1 ? 0 : getRandomNumberWithinRange(0, numberOfKeys - 1);
    const key = objectKeys[randomIndex];

    return [key, obj[key]];
};

export const getRandomNumberWithinRange = (min: number, max: number): number => {
    if (typeof min !== "number") throw new Error("Minimum value passed is not a number");
    if (typeof max !== "number") throw new Error("Maximum value passed is not a number");
    if (min >= max) {
        throw new Error("Minimum value cannot be greater than or equal to the maximum value");
    }

    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);

    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

export const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];

        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
