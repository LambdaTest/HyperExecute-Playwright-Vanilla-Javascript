const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

// TE-30974 rerun fixture (dedicated dir - never discovered by passing-case yamls that scan tests/).
test.describe('Rerun Probe - passing', () => {
  test('passing scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});
