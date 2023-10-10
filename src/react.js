module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    ...['./base.js'].map(require.resolve),
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'arrow-body-style': ['error', 'as-needed'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
