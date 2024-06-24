const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.pecodesoftware.com/qa-portal/",
    setupNodeEvents(on, config) {
      const environmentName = config.env.ENVIROMENTNAME;
      const environmentFilename = `./${environmentName}.data.json`;
      const data = require(environmentFilename);
      if (data.env) {
        config.env = {
          ...config.env,
          ...data.env,
        };
      }
      return config;
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "./report/mochawesome-report",
  },
  video: true,
  videosFolder: "./report/videos",
  screenshotsFolder: "./report/screenshots",
});
