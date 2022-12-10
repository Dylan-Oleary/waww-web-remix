import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    defaultIgnores: true,
    rules: {
        "type-enum": [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "revert"]]
    }
};

module.exports = Configuration;
