import { convertObjectToUrlSearchParams } from "./urls";

describe("Url Utils", () => {
    describe("convertObjectToUrlSearchParams", () => {
        it("returns the expected url search params", () => {
            const args: Record<string, any> = {
                sum: 41,
                blink: 182,
                sleepy: true,
                pink: "floyd"
            };
            const expected: Record<string, string> = {
                sum: "41",
                blink: "182",
                sleepy: "true",
                pink: "floyd"
            };
            const result = convertObjectToUrlSearchParams(args);

            for (const [key, value] of result.entries()) {
                expect(expected[key]).toEqual(value);
            }

            expect(result instanceof URLSearchParams).toBe(true);
        });

        it.each<null | undefined>([null, undefined])(
            "should remove an invalid value when the value is '%s'",
            (invalid) =>
                expect(convertObjectToUrlSearchParams({ sum: 41, invalid }).get("invalid")).toEqual(
                    null
                )
        );
    });
});
