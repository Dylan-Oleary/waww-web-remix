/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    projects: [
        {
            displayName: "DOM",
            moduleDirectories: ["node_modules", "app"],
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/app/$1"
            },
            preset: "ts-jest",
            testEnvironment: "jsdom",
            testMatch: ["**/?(*).test.+(ts|tsx)", "!**/?(*).server.test.+(ts|tsx)"],
            testPathIgnorePatterns: ["node_modules/", ".cache/", "build/"],
            transform: {
                "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }]
            },
            transformIgnorePatterns: ["/node_modules/"]
        },
        {
            displayName: "Node",
            moduleDirectories: ["node_modules", "app"],
            moduleNameMapper: {
                "^@/(.*)$": "<rootDir>/app/$1"
            },
            preset: "ts-jest",
            setupFiles: ["<rootDir>/jest/setupNode.js"],
            testEnvironment: "node",
            testMatch: ["**/?(*).server.test.+(ts|tsx)"],
            testPathIgnorePatterns: ["node_modules/", ".cache/", "build/"],
            transform: {
                "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }]
            },
            transformIgnorePatterns: ["/node_modules/"]
        }
    ],
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/*.test.{ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!**/index.ts",
        "!*.js",
        "!commitlint.config.ts"
    ],
    coverageDirectory: "<rootDir>/coverage",
    roots: ["<rootDir>/app"],
    testTimeout: 30000
};
