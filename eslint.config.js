import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier'; // <-- 1. Import prettier config

export default defineConfig([
  // 1. Core configuration for all your regular JavaScript source files
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser, // Provides window, document, etc.
      },
      ecmaVersion: 'latest', // Allow modern JS (async/await)
    },
  },

  // 2. Jest testing environment configuration (Isolated to test files)
  {
    files: ['**/*.{test,spec}.{js,mjs,cjs}', '**/__tests__/**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser, // Includes browser variables if testing DOM elements
        ...globals.jest, // <-- Adds describe, test, expect, etc. without manual imports
      },
    },
  },

  // 3. Put Prettier last so it overrides all styling configurations
  eslintConfigPrettier,
]);
