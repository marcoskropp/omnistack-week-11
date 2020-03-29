
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'react-hooks'
  ],

  rules: {
    'comma-dangle': 0,
    'semi': [2, 'never'],
    '@typescript-eslint/member-delimiter-style': [2, {
      'multiline': {
        'delimiter': 'none',
        'requireLast': false
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    }],
    'max-len': [2,
      {
        'code': 120,
        'ignoreComments': true
      }
    ],
    'camelCase': 0,
    'implicit-arrow-linebreak': 0,
    'arrow-parens': 0,
    'no-param-reassign': [2, { 'props': false }],
    'object-curly-newline': 0,

    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-curly-spacing': 0,
    'react/no-array-index-key': 0,

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,

    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 2,

    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-commonjs': 2,
    'import/order': ['error', { 'newlines-between': 'always-and-inside-groups' }]
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 0
      }
    }
  ]
}
