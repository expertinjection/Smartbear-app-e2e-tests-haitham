const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    APP_BASE_URL: process.env.APP_BASE_URL,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});