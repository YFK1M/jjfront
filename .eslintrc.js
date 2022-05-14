// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         'plugin:@typescript-eslint/recommended',
//         'plugin:prettier/recommended',
//     ],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//         "ecmaFeatures": {
//             "jsx": true
//         },
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react",
//         "@typescript-eslint",
//         'eslint-plugin-no-cyrillic-string',
//         'jam3',
//     ],
//     "ignorePatterns": ['.eslintrc.js'],
//     "rules": {
//         "no-console": "off",
//         "react/no-danger": 0, // disable eslint for dangerouslySetInnerHTML
//         "jam3/no-sanitizer-with-danger": [ 1, { wrapperName: ['sanitize'] }], // enable eslint for dangerouslySetInnerHTML without sanitize
//         "jsx-a11y/href-no-hash": ["off"],
//         "react/jsx-filename-extension": [
//             "warn",
//             {
//                 extensions: [".js", ".jsx", ".ts", ".tsx"],
//             },
//         ],
//         "import/prefer-default-export": 0,
//         "object-curly-newline": 0,
//         "react/jsx-props-no-spreading": 0,
//         "eslint(jsx-a11y/anchor-is-valid)": 0,
//         "jsx-a11y/anchor-is-valid": 0,
//         "prefer-destructuring": 0,
//         "no-case-declarations": 0,
//         "no-nested-ternary": 0,
//         "max-len": [
//             "warn",
//             {
//                 code: 120,
//                 tabWidth: 2,
//                 comments: 120,
//                 ignoreComments: false,
//                 ignoreTrailingComments: true,
//                 ignoreUrls: true,
//                 ignoreStrings: true,
//                 ignoreTemplateLiterals: true,
//                 ignoreRegExpLiterals: true,
//             },
//         ],
//         '@typescript-eslint/interface-name-prefix': 'off',
//         '@typescript-eslint/explicit-function-return-type': 'off',
//         '@typescript-eslint/explicit-module-boundary-types': 'off',
//         '@typescript-eslint/no-explicit-any': 'off',
//     },
// };
