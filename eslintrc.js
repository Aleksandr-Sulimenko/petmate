module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "react/display-name": "off", // Отключаем проблемное правило
  },
  "parserOptions": {
    "ecmaVersion": 2021
  }
};