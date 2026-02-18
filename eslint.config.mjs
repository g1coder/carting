import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "react-hooks/exhaustive-deps": "off",
            "no-empty-object-type": "off",
            "react-hooks/refs": "off",
            "react-hooks/set-state-in-effect": "off",
            "react-hooks/immutability": "off",
            "react-hooks/incompatible-library": "off",
            "react-hooks/purity": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    varsIgnorePattern: "^(?!__)_",
                    argsIgnorePattern: "^(?!__)_",
                    destructuredArrayIgnorePattern: "^(?!__)_",
                    caughtErrorsIgnorePattern: "^(?!__)_",
                },
            ],
        },
    },
];

export default eslintConfig;
