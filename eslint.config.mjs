import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default [
  {
  languageOptions: { globals: globals.browser },
  rules: {
    "no-console": "warn",
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "no-undef": "error",
    "no-undef-init": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-import-assign": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "default-case":"warn",
    "default-case-last": "warn",
    "eqeqeq": "warn",
    "func-style": ["warn", "expression"],
    "no-implied-eval": "error",
  },
  ignores: ["./eslint.config.mjs", "./webpack.config.js"],
  },
  ...compat.extends("standard-with-typescript"),
  pluginReactConfig,
];