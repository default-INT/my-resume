import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      './bin',
    ],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      '@typescript-eslint': tseslint.plugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: [
            './packages/**/tsconfig.json',
            './apps/**/tsconfig.json',
            './tsconfig.json',
          ],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: [
          './packages/**/tsconfig.json',
          './apps/**/tsconfig.json',
          './tsconfig.json',
        ],
      },
    },
    rules: {
      // Airbnb base-style
      'comma-dangle': ['error', 'always-multiline'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'array-callback-return': ['error', { checkForEach: true }],
      'default-case-last': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'eqeqeq': ['error', 'smart'],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-proto': 'error',
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'object-shorthand': ['error', 'always'],
      'one-var': ['error', 'never'],
      'prefer-const': ['error', { destructuring: 'all' }],
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'radix': ['error', 'as-needed'],
      'yoda': ['error', 'never'],

      // import (airbnb)
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      'import/no-absolute-path': 'error',
      'import/no-self-import': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-unresolved': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
        },
      ],

      // react (airbnb)
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
      'react/jsx-props-no-multi-spaces': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'never',
          afterOpening: 'never',
          beforeClosing: 'allow',
        },
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'react/require-default-props': 'off',
      'react/forbid-prop-types': 'off',
      'react/function-component-definition': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
      'react/no-multi-comp': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-children-prop': 'off',
      'react/jsx-no-bind': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/prop-types': 'off',
      'react/no-danger': 'off',

      // hooks (airbnb/hooks)
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // airbnb a11y
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',

      '@typescript-eslint/keyword-spacing': 'off',
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
      '@typescript-eslint/no-shadow': 'warn',
      '@typescript-eslint/no-useless-constructor': 'off',
      '@/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],

      // Other
      'no-multi-spaces': ['error'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'no-trailing-spaces': 'error',
      'key-spacing': [
        'error',
        {
          beforeColon: false,
          afterColon: true,
          mode: 'strict',
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': 'off',
      'prefer-arrow-callback': 'warn',
      'react/button-has-type': 'off',
      'semi': ['error', 'always'],
      'no-void': 'off',
      'newline-before-return': 'error',
      'curly': ['error', 'multi-line'],
      'import/prefer-default-export': 'off',
      'no-console': 'off',
      'no-continue': 'off',
      'object-curly-newline': ['error', { consistent: true }],
      'no-await-in-loop': 'off',
      'no-restricted-syntax': 'off',
      'no-restricted-imports': [
        2,
        {
          paths: [
            {
              name: 'lodash',
              message: 'Please use lodash-es instead.',
            },
          ],
        },
      ],
      'import/no-cycle': 'error',
      'no-nested-ternary': 'error',
      'max-len': ['error', { code: 120 }],
      'react/no-array-index-key': 'error',
      'prefer-spread': 'off',
      'import/no-extraneous-dependencies': 'off',
      'arrow-parens': ['error', 'as-needed'],
      'no-param-reassign': 'error',
      'no-underscore-dangle': 'off',
      'no-prototype-builtins': 'off',
      'prefer-destructuring': 'off',
      'import/no-mutable-exports': 'error',
      'no-restricted-exports': ['error', { restrictedNamedExports: ['off'] }],
      'arrow-body-style': ['error', 'as-needed'],
      'no-alert': 'off',
      'max-classes-per-file': ['error', 1],
      'class-methods-use-this': 'off',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-multi-assign': 'error',
      'consistent-return': 'off',
      'func-names': 'off',
      'eol-last': ['error', 'always'],
    },
  },

  // TS-override: correct replacement of base rules with their TS analogs
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'semi': 'error',
      '@/semi': ['error', 'always'],

      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Optional: strict control of unused variables in TS
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
