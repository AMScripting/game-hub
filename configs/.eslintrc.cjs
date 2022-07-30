module.exports = {
  root: true,
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.config.mjs', '**/*.config.js'],
      },
    ],
    'import/no-named-as-default': 'off',
    'lines-between-class-members': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
  },
};
