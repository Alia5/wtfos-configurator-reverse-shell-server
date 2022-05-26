module.exports = {
    extends: [ 'esnext', 'esnext/style-guide', 'node', 'node/style-guide' ],
    plugins: [
        'prefer-arrow',
        'no-null'
    ],
    env: {
        browser: false,
        node: true
    },
    rules: {
        'no-console': 'off', // cli app only,
        'quotes': [ 'error', 'single', { allowTemplateLiterals: true,
            avoidEscape: true } ],
        'no-return-await': 'error',
        'arrow-body-style': 'error',
        'arrow-parens': [
            'error',
            'always'
        ],
        'camelcase': [ 'warn', { ignoreImports: true } ],
        'comma-dangle': [
            'error',
            {
                objects: 'never',
                arrays: 'never',
                functions: 'never'
            }
        ],
        'prefer-arrow/prefer-arrow-functions': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],
        'no-var': 'error',
        'new-parens': 'error',
        'no-caller': 'error',
        'no-cond-assign': 'error',
        'no-debugger': 'error',
        'no-empty': 'error',
        'no-eval': 'error',
        'no-multiple-empty-lines': 'warn',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all'
            }
        ],
        'no-null/no-null': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'error',
        'no-unsafe-finally': 'error',
        'no-unused-labels': 'error',
        'spaced-comment': 'error',
        'use-isnan': 'error',
        'max-lines': [
            'error',
            {
                max: 300,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        'max-len': [
            'warn',
            {
                code: 140
            }
        ],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'eol-last': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'block-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'import/no-deprecated': 'warn', // eslint deprecation rule sucks. just wrns on deprecated IMPORTs
        'tsdoc/syntax': 'off',
        'indent': [ 'error', 4 ],
        'brace-style': [ 'error', 'stroustrup', { allowSingleLine: false } ],
        'sort-imports': 'off', // we have auto-import and hiding in IDEs nowadays. WHO THE FUCK CARES?!,
        'curly': [ 'error', 'all' ],
        'no-process-exit': 'off',
        'semi': [ 'error', 'always' ]
    }
};
