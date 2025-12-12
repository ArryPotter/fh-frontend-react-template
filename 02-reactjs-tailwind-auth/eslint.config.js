import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // not needed in React 17+
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/anchor-is-valid': 'off', // optional: adjust as needed
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // ✅ This disables ESLint rules that conflict with Prettier
  prettierConfig,

  // ✅ This runs Prettier as an ESLint rule (optional, but great for CI)
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': 'error', // Enforces Prettier formatting
    },
  },
];
