import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsparser from '@typescript-eslint/parser';


export default [
    {
        ignores: [
            'build/',
            'dist/',
            'node_modules/',
            '.snapshots/',
            '*.min.js',
            'example/',
            'coverage/',
        ],
    },
    {
        files: ["**/*.ts", "**/*.tsx"],

        languageOptions: {
            parser: tsparser,
        },

        plugins: {
            "simple-import-sort": simpleImportSort,
        },

        rules: {
            quotes: ["warn", "single"],
            "simple-import-sort/imports": "warn",
            semi: ["warn", "always"],
            indent: ["warn", 4],
            "object-curly-spacing": ["warn", "never"],
            "jsx-a11y/alt-text": "off",
            "jsx-a11y/anchor-is-valid": "off",
            "import/first": "off",
            "import/no-anonymous-default-export": "off",
            "react-hooks/exhaustive-deps": "off",
            "no-useless-escape": "off",
            "@typescript-eslint/no-unused-vars": "off",
        },
    },
];
