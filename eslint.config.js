export default [
  {
    ignores: ["dist/", "node_modules/"], // Ignore build & dependency folders
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
      "jsx-a11y": require("eslint-plugin-jsx-a11y"),
      import: require("eslint-plugin-import"),
    },
    rules: {
      "react/prop-types": "off", // Disable prop-types rule for React
      "react/react-in-jsx-scope": "off", // No need to import React in Next.js
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warns about missing dependencies
      "jsx-a11y/anchor-is-valid": "warn", // Accessibility warnings
      "import/no-unresolved": "error", // Prevents unresolved imports
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Warns on unused variables
      "prettier/prettier": "warn", // Integrates Prettier
    },
  },
];

