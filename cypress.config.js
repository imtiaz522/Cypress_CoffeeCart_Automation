const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {

    reportDir: 'cypress/reports', // Directory to save reports
    overwrite: false, // Do not overwrite previous reports
    html: true, // Generate HTML reports
    json: true, // Generate JSON reports
    charts: true, // Include charts in the report
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },

    defaultCommandTimeout: 10000, // Timeout for commands in milliseconds (default is 4000ms)
    pageLoadTimeout: 60000 // Timeout for page loads in milliseconds (default is 60000ms)
  },
});
