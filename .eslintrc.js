// .eslintrc.js
module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    parserOptions: { ecmaVersion: 8 },
    ignorePatterns: ["node_modules/*", ".next/*", ".out/*", "!.prettierrc.js"],
    extends: ["eslint:recommended"],
    overrides: [
        // This configuration will apply only to TypeScript files
        {
            files: ["**/*.ts", "**/*.tsx"],
            parser: "@typescript-eslint/parser",
            settings: { react: { version: "detect" } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                "eslint:recommended",
                "plugin:react/recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
                "prettier/@typescript-eslint",
            ],
            rules: {
                // We will use TypeScript's types for component props instead
                "react/prop-types": "off",

                // No need to import React when using Next.js
                "react/react-in-jsx-scope": "off",

                "@typescript-eslint/explicit-module-boundary-types": "off",

                // Why would you want unused vars?
                "@typescript-eslint/no-unused-vars": ["error"],
                "prettier/prettier": ["error", {}, { usePrettierrc: true }],
            },
        },
    ],
};
