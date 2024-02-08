module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    require.resolve('./base.js'),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',

    'react/react-in-jsx-scope': 'off',

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
          {
            pattern: '**/*.css',
            group: 'type',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['**/*.css'],
        warnOnUnassignedImports: true,
      },
    ],

    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
