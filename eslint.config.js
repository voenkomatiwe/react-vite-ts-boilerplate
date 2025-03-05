import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintJs from "@eslint/js";
import eslintTs from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import esLintImport from "eslint-plugin-import";

export default eslintTs.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [eslintJs.configs.recommended, ...eslintTs.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.app.json", "tsconfig.node.json"],
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
      import: esLintImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: ["./tsconfig.json", "./tsconfig.app.json", "./tsconfig.node.json"],
        },
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/internal-regex": "^@/",
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
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

      // Imports
      "import/no-named-as-default-member": "off",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
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
