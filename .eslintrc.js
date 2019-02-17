module.exports = {
  parser: 'typescript-eslint-parser',
  parserOptions: {
    jsx: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
  },
};
