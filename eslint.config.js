import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  { ignores: ['./dist/**/*'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'] },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: { 'simple-import-sort/imports': 'error', 'simple-import-sort/exports': 'error' },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { 'unused-imports': unusedImports },
    rules: { 'unused-imports/no-unused-imports': 'error' },
  },
]);
