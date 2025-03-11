import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{ts,tsx}'] },
  { ignores: ['*.js', 'node_modules/**', 'build/**', '.react-router/**'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  jsdoc.configs['flat/recommended-typescript'],
  {
    plugins: { jsdoc },
    rules: {
      'no-console': 'error',
      'react/react-in-jsx-scope': 'off',
      'jsdoc/require-description': 'error',
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
    },
  },
];
