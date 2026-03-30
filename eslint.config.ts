import tanstackQuery from '@tanstack/eslint-plugin-query';
import eslintConfigNext from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';
import { configs as sonarjs } from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: ['.next', '*.js']
  },
  /**
   * eslint-config-next automatically configures:
   * - eslint-plugin-react
   * - eslint-plugin-react-hooks
   * - eslint-plugin-jsx-a11y
   */
  ...eslintConfigNext,
  ...tanstackQuery.configs['flat/recommended'],
  sonarjs.recommended,
  unicorn.configs.recommended,
  reactCompilerPlugin.configs.recommended,
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'typeLike', format: ['PascalCase'] },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow'
        },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' }
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react',
              importNames: ['default'],
              message:
                "Only named imports are allowed from 'react' (e.g. import { useState } from 'react')."
            }
          ]
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true,
          allowBoolean: true
        }
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowNullableBoolean: true,
          allowNullableNumber: true
        }
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off'
    }
  },
  prettierConfig,
  prettierPlugin,
  {
    rules: {
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // Covered by @typescript-eslint

      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/self-closing-comp': 'error',

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true,
            ctx: true
          },
          ignore: [/db/i, /util/i, /param/i]
        }
      ],

      'sonarjs/deprecation': 'off', // Covered by @typescript-eslint
      'sonarjs/no-array-delete': 'off', // Covered by @typescript-eslint
      'sonarjs/no-unused-vars': 'off', // Covered by @typescript-eslint
      'sonarjs/prefer-regexp-exec': 'off', // Covered by @typescript-eslint
      'sonarjs/unused-import': 'off', // Covered by @typescript-eslint

      'unicorn/no-array-sort': 'off',
      'unicorn/no-nested-ternary': 'off', // Covered by sonarjs/no-nested-conditional
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-includes': 'off', // Covered by @typescript-eslint
      'unicorn/prefer-string-starts-ends-with': 'off' // Covered by @typescript-eslint
    }
  }
);
