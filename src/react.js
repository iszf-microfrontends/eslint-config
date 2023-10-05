module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [require.resolve('./base.js'), 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
