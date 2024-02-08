module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/return-await': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            group: 'internal',
            pattern: '~/**',
            position: 'before',
          },
        ],
      },
    ],

    'no-return-await': 'error',
    'prefer-template': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'no-plusplus': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        allowNamedExports: false,
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', argsIgnorePattern: '^_', ignoreRestSiblings: false },
    ],
  },
};
