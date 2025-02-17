// eslint.config.mjs
/*
  SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
  This file is part of Network Engineering Pro
*/

import js from "@eslint/js";
import {
  default as eslintConfigPrettier,
  default as prettierConfig,
} from "eslint-config-prettier";
import mocha from "eslint-plugin-mocha";
import globals from "globals";

const IGNORED_FILES = [
  ".*", // Ignores all dotfiles (.prettierrc, .babelrc, etc.)
  "**/*.xml", // Exclude non-JS files like bimi-svg-tiny-ps.xml
  "**/.vscode/**",
  "**/dist/**",
  "**/node_modules/**",
  "**/assets/license/**",
  "**/babel.config.json",
  "**/package.json",
  "**/package-lock.json",
];

const GLOBALS = {
  ...globals.browser,
  ...globals.node,
  ...globals.mocha,
};

const ESLINT_RULES = {
  ...prettierConfig.rules,
  "mocha/no-exclusive-tests": "error",
  "mocha/no-skipped-tests": "warn",
  "mocha/no-hooks-for-single-case": "warn",
  "indent": "off", // Turn off the 'indent' rule
  "quotes": "off", // Turn off the 'quotes' rule
  "semi": "off", // Turn off the 'semi' rule
};

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ignores: IGNORED_FILES,
    plugins: { mocha },
    languageOptions: {
      globals: GLOBALS,
      ecmaVersion: "latest", // Auto-upgrade ECMAScript version
      sourceType: "module",
    },
    rules: ESLINT_RULES,
  },
  eslintConfigPrettier,
];
