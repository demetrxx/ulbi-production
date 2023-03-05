module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx'],
    }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, {
      argsIgnorePattern: '^_',
    }],
    'no-shadow': 'off',
    'import/extensions': 'off',
    'max-len': [2, {
      ignoreComments: true,
      code: 100,
    }],
    'import/no-extraneous-dependencies': 'warn',
    'no-underscore-dangle': 'off',
    'i18next/no-literal-string': [2, {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
    {
      files: ['src/shared/**/*.{ts,tsx}', 'src/**/*.stories.{ts,tsx}'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: [
        'src/**/*.test.{ts,tsx}',
        'src/**/*.stories.{ts,tsx}',
        'config/**/*.{ts,tsx,js}',
        'src/shared/lib/tests/**/*.{ts,tsx}',
        'src/shared/config/**/*.{ts,tsx}',
        './webpack.config.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    }],
};
