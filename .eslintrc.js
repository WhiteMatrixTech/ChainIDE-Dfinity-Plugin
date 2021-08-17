module.exports = {
  extends: ['@white-matrix/eslint-config'],
  parserOptions: {
    project: require.resolve('./tsconfig.json')
  },

  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-extraneous-import': 'off',
    'import/no-unresolved': 'off'
  }
};
