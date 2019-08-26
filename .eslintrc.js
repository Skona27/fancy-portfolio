module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
    "jsx-a11y/tabindex-no-positive": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/interface-name-prefix": ["error", "always"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: false }
    ],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-restricted-syntax": "off",
    "jsx-a11y/anchor-has-content": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "prefer-destructuring": "off",
    "react/jsx-boolean-value": "off",
    "dot-notation": "off",
    "label-has-for": "off",
    "import/named": "off",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "no-shadow": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "react/no-multi-comp": "off",
    "react/no-unescaped-entities": "off",
    "no-nested-ternary": "off",
    "lines-between-class-members": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-return-assign": "off",
    "consistent-return": "off",
    "no-undef": "off",
    "react/jsx-no-undef": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/destructuring-assignment": "off",
    "import/no-cycle": "off",
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "react/jsx-key": [1, { checkFragmentShorthand: false }],
    "no-unused-expressions": [
      "error",
      { allowShortCircuit: true, allowTernary: true }
    ]
  }
};
