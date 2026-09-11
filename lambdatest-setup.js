const base = require('@playwright/test')
const path = require('path')
const { chromium } = require('playwright')

// LambdaTest capabilities
const capabilities = {
  'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  'browserVersion': 'latest',
  'LT:Options': {
    'platform': process.env.HYPEREXECUTE_PLATFORM,
    'build': 'Playwright HyperExecute Build',
    'name': 'Playwright HyperExecute Test',
    'user': process.env.LT_USERNAME,
    'accessKey': process.env.LT_ACCESS_KEY,
    // 'network': true,
    'video': true,
    'console': true
  }
}

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split('@lambdatest')[0]
  let [browserName, browserVersion] = config.split(':')
  capabilities.browserName = browserName ? browserName : capabilities.browserName
  capabilities.browserVersion = browserVersion ? browserVersion : capabilities.browserVersion
  // capabilities['LT:Options']['platform'] = platform ? platform : capabilities['LT:Options']['platform']
  capabilities['LT:Options']['name'] = testName
}

const getErrorMessage = (obj, keys) => keys.reduce((obj, key) => (typeof obj == 'object' ? obj[key] : undefined), obj)

exports.test = base.test.extend({
  page: async ({ page, playwright }, use, testInfo) => {
    // Configure LambdaTest platform for cross-browser testing
    let fileName = testInfo.file.split(path.sep).pop()
    if (testInfo.project.name.match(/lambdatest/)) {
      modifyCapabilities(testInfo.project.name, `${testInfo.title} - ${fileName}`)
      await use(page)
    }
  }
})