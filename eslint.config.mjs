import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// Ensure you're extending the appropriate Next.js ESLint configurations
const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    // You can add any additional rules here if necessary
];

export default eslintConfig;
