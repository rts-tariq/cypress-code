const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000,   // Set the default command timeout to 10 seconds
  pageLoadTimeout: 30000          // Set the page load timeout to 30 seconds
});