const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
        mochaJunitReporterReporterOptions: {
            mochaFile: 'cypress/reports/junit/results-[hash].xml'
        },
        cypressMochawesomeReporterReporterOptions: {
            charts: true,
            reportPageTitle: 'Test Report',
            embeddedScreenshots: true,
            inlineAssets: true,
            saveAllAttempts: false
        }
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = 'https://front.serverest.dev/'; 
      config.env.endpointBaseUrl = 'https://serverest.dev'; 
      return config
    },
  },
});
