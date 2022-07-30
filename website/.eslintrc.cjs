require('@rushstack/eslint-patch/modern-module-resolution');
const config = require('../configs/.eslintrc.cjs');

module.exports = {
  ...config,
  env: {
    ...config.env,
    browser: true,
  },
  extends: [
    '@open-wc',
    ...config.extends,
    'plugin:wc/recommended',
    'plugin:lit/recommended',
    'plugin:lit-a11y/recommended',
  ],
  plugins: [...config.plugins, 'lit', 'lit-a11y', 'import'],
  rules: {
    ...config.rules,
    'import/no-cycle': 'off',
  }
};
