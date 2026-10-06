const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

// TE-30974 rerun fixture: a deliberately-failing scenario so the source-payload job has 1 failed scenario out of
// 2 (-> rerun-eligible, failed-subset distinct from all). Lives OUTSIDE tests/ so no passing-case yaml discovers it.
test.describe('Rerun Probe - failing', () => {
  test('deliberately failing scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/ThisTitleIntentionallyDoesNotExist-RerunProbe/);
  });
});
