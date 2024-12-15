import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081',
    env: {
      backendUrl: 'http://localhost:4001'
    },
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--disable-search-engine-choice-screen')
        }
        return launchOptions
      })
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
});
