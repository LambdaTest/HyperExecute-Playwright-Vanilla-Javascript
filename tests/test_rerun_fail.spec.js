const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

// TE-30974: a deliberately-failing test so the HyperExecute source-payload job has a failed scenario and is
// rerun-eligible (used by LTQAAutomation rerun automation for "Source Payload, tests with session" coverage).
test.describe('PlayWright Vanilla JS - Rerun Probe (intentional fail)', () => {
  test('Deliberately failing scenario for rerun automation', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/ThisTitleIntentionallyDoesNotExist-RerunProbe/);
  });
});
