import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/out/**',
      '**/build/**',
      '**/public/**/*.{png,jpg,jpeg,gif,svg,ico,webp}',
      '**/*.tsbuildinfo',
      '**/next-env.d.ts',
    ],
    rules: {
      'react/no-unescaped-entities': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
]; 