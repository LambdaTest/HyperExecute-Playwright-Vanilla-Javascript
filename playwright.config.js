const { devices } = require('@playwright/test')

// Playwright config to run tests on LambdaTest platform and local
const config = {
  testDir: '.',
  // tests_rerun_probe/ holds the rerun fixture specs; it must be inside testDir or they are never found
  testMatch: ['tests/**/*.spec.js', 'tests_rerun_probe/**/*.spec.js'],
  timeout: 120000,
  use: {
    viewport: null
  },
  workers: 1,
  projects: [
    {
      name: 'chrome:latest@lambdatest',
      use: {
        viewport: { width: 1280, height: 720 }
      }
    }
    // {
    //   name: 'MicrosoftEdge:latest@lambdatest',
    //   use: {
    //     viewport: { width: 1280, height: 720 }
    //   }
    // }
    //     {
    //   name: 'pw-chromium:latest@lambdatest',
    //   use: {
    //     viewport: { width: 1280, height: 720 }
    //   }
    // },
    // {
    //   name: 'pw-firefox:latest@lambdatest',
    //   use: {
    //     viewport: { width: 1280, height: 720 }
    //   }
    // },
    // {
    //   name: 'pw-webkit:latest@lambdatest',
    //   use: {
    //     viewport: { width: 1280, height: 720 }
    //   }
    // }
  ]
}

module.exports = config
