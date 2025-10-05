// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, 
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 🔽 Relaxed rules
      '@typescript-eslint/no-explicit-any': 'off', // biarin any dulu
      '@typescript-eslint/no-floating-promises': 'off', // ga wajib await
      '@typescript-eslint/prefer-nullish-coalescing': 'off', // boleh pakai ||
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-empty-function': 'warn', // cuma warning, bukan error
      '@typescript-eslint/no-require-imports': 'warn', // biarin require
      'react-refresh/only-export-components': 'warn', // biarin campur export
    },
  },
])
