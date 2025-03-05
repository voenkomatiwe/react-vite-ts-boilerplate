import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import esLintImport from "eslint-plugin-import";
import react from "eslint-plugin-react";

export default eslintTs.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [eslintJs.configs.recommended, ...eslintTs.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.app.json", "tsconfig.node.json"],
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
      import: esLintImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: [
            "./tsconfig.json",
            "./tsconfig.app.json",
            "./tsconfig.node.json",
          ],
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // TypeScript
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "@typescript-eslint/prefer-optional-chain": "error",

      // Console & Formatting
      "no-console": ["warn", { allow: ["error", "warn", "info"] }],
      "prefer-const": "warn",
      "prettier/prettier": "error",
      "no-else-return": ["error", { allowElseIf: false }],
      "no-unneeded-ternary": "error",
      "prefer-template": "error",

      // React
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/self-closing-comp": "error",
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
      "react/jsx-no-constructed-context-values": "error",
      "react/jsx-pascal-case": ["error", { allowNamespace: true }],
      "react/jsx-curly-newline": [
        "error",
        { multiline: "consistent", singleline: "consistent" },
      ],
      "react/jsx-fragments": ["error", "syntax"],
      "react/no-unused-prop-types": "warn",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-sort-props": [
        "error",
        {
          ignoreCase: false,
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: true,
          multiline: "ignore",
        },
      ],

      // Imports
      "import/no-unresolved": "error",
      "import/no-named-as-default-member": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["sibling", "parent"],
            "index",
            "unknown",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/no-duplicates": "error",
      "import/newline-after-import": ["error", { count: 1 }],
      "import/no-self-import": "error",
      "import/no-cycle": "warn",
      "import/no-relative-packages": "error",
      "import/no-extraneous-dependencies": "error",
      //TODO: https://github.com/import-js/eslint-plugin-import/issues/3079
      // "import/no-unused-modules": ["error", { unusedExports: true }],

      // Import Sorting for Better Readability
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
);
