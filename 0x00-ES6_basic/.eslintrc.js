module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
  },
};

