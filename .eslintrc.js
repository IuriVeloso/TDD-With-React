module.exports = {
    extends: [
        "codingitwrong",
    ],
    parser: "babel-eslint",
    plugins: [
        "jest",
        "react",
        "cypress",
    ],
    env: {
        'es6': true,
        "node": true,
        'browser': true,
        'jest/globals': true,
        'cypress/globals': true,
    },
    rules: {
        'indent': ['error', 4],
    },
};
