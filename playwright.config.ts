import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { getTestDirConfig,getWorkersCount } from './utils/testdir-util';
import * as os from "node:os";

const testDir = defineBddConfig(getTestDirConfig())
console.log("Test DIR", testDir)

export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: false,
  workers: getWorkersCount(),
  reporter:[
    ['html'],['dot'],['list'],['json', {  outputFile: 'playwright-report/test-results.json',open:'never' }],
    ["allure-playwright",
      {
        // resultsDir: "allure-results",
        detail: true,
        suiteTitle:true,
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
        categories: [ 
          {
              name: 'Page NotFound',
              messageRegex: 'Error:.*'
          },
          {
              name: 'Internal Server Error',
              messageRegex: '.*Internal Server Error.*',
          },
          {
              name: 'Timeout errors',
              messageRegex: '.*timeout.*'
          },
          {
              name: 'Accessibility',
              messageRegex: '.*accessibility.*'
          }
      ],
      }
    ]

  ] ,
  
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'off',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
    name: 'chrome',
    use: { browserName:'chromium'},
  },

  {
    name: 'firefox',
    use: { browserName:'firefox'},
  },

  // {
  //   name: 'safari',
  //   use: {browserName:'webkit' },
  // },

  // // /* Test against mobile viewports. */
  // {
  //   name: 'iPad',
  //    use: { ...devices['iPad Pro 11'] },
  // },
  //  {
  //   name: 'iPhone',
  //   use: { ...devices['iPhone 15 Pro Max'] },
  // },
],

});