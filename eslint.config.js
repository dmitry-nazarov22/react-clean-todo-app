import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint-define-config";

export default defineConfig([
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": "warn",
      "no-unused-vars": "off", // Disable ESLint's rule
      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
    },
  },
  prettier, // Apply Prettier last to override conflicting rules
]);
