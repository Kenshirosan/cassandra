module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    rules: {
        'no-console': 'off',
        'no-alert': 'off',
        'no-debugger': 'off',
        'indent': ['error', 4],
        'spaced-comment': 'off',
        'no-underscore-dangle': 'off',
        'no-return-assign': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
