import { getRandomKeyValuePairFromObject, getRandomNumberWithinRange } from "./helpers";

describe("Helper Utils", () => {
    describe("getRandomKeyValuePairFromObject", () => {
        it("throws an error if the passed object has no keys", () => {
            expect(() => getRandomKeyValuePairFromObject({})).toThrowError(
                "Passed object has no keys"
            );
        });

        it("returns the expected key-value pair when the object has one key", () => {
            const [key, value] = ["blah", "bloop"];
            const [returnedKey, returnedValue] = getRandomKeyValuePairFromObject({ [key]: value });

            expect(returnedKey).toEqual(key);
            expect(returnedValue).toEqual(value);
        });

        it("returns a random key-value pair", () => {
            const obj: Record<string, any> = {
                id: 1,
                title: "The Hateful Eight",
                director: "Quentin Tarantino",
                score: 100,
                rating: "NC-17"
            };
            const [key, value] = getRandomKeyValuePairFromObject(obj);

            expect(obj[key]).toEqual(value);
        });
    });

    describe("getRandomNumberWithinRange", () => {
        it.each<{ min: number; max: number }>([
            {
                min: 1,
                max: 5
            },
            {
                min: 15,
                max: 17
            },
            {
                min: 0,
                max: 1
            }
        ])("returns the expected value", ({ min, max }) => {
            const result = getRandomNumberWithinRange(min, max);

            expect(isNaN(result)).toBe(false);
            expect(result).toBeGreaterThanOrEqual(min);
            expect(result).toBeLessThanOrEqual(max);
        });

        it.each<unknown>(["111", true, Symbol("What?!"), undefined, null, { x: "pac" }])(
            "throws and error when the minimum value is not a number. Passed: %s",
            (min) => {
                //@ts-ignore - Testing invalid value
                expect(() => getRandomNumberWithinRange(min, 100)).toThrow(
                    "Minimum value passed is not a number"
                );
            }
        );

        it.each<unknown>(["111", true, Symbol("What?!"), undefined, null, { d: "x" }])(
            "throws and error when the maximum value is not a number. Passed: %s",
            (max) => {
                //@ts-ignore - Testing invalid value
                expect(() => getRandomNumberWithinRange(1, max)).toThrow(
                    "Maximum value passed is not a number"
                );
            }
        );

        it("throws an error when the minimum value is greater than the maximum value", () => {
            expect(() => getRandomNumberWithinRange(100, 50)).toThrow(
                "Minimum value cannot be greater than or equal to the maximum value"
            );
        });

        it("throws an error when the minimum value is equal to the maximum value", () => {
            expect(() => getRandomNumberWithinRange(100, 100)).toThrow(
                "Minimum value cannot be greater than or equal to the maximum value"
            );
        });
    });
});
