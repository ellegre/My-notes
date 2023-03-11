/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plagin:vue/base"
  ],
  rules: {
    // Enable vue/script-setup-uses-vars rule
    'vue/script-setup-uses-vars': 'error',
  },
  "env": {
    "vue/setup-compiler-macros": true
  }
}
