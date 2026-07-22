const { defineConfig, devices } = require('@playwright/test');
const environment = require('./environment');

module.exports = defineConfig({
  testDir: '../tests',

  timeout: 30000,

  use: {
    baseURL: environment.baseUrl,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});