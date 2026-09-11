const { devices } = require('@playwright/test')

// Playwright config to run tests on LambdaTest platform and local
const config = {
  testDir: 'tests',
  testMatch: '**/*.spec.js',
  timeout: 120000,
  use: {
    viewport: null
  },
  workers: 1,
  projects: [
    {
      name: 'chrome:latest@lambdatest',
      use: {
        connectOptions: {"wsEndpoint": "wss://cdp.lambdatest.com/playwright?capabilities=%7B%22browserName%22%3A%22chrome%22%2C%22browserVersion%22%3A%22latest%22%2C%22LT%3AOptions%22%3A%7B%22platform%22%3A%22linux%22%2C%22build%22%3A%22Playwright%20HyperExecute%20Build%22%2C%22name%22%3A%22Navigate%20PlayWright%20Documentation%20-%20test_3.spec.js%22%2C%22user%22%3A%22onpremezztt%22%2C%22accessKey%22%3A%22<REPLACE_YOUR_ACCESS_KEY>%22video%22%3Atrue%2C%22console%22%3Atrue%7D%7D"},
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
