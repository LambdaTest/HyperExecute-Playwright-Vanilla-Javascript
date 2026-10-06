const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

// TE-30974 rerun fixture. These specs live OUTSIDE tests/ on purpose: every existing yaml discovers from
// tests/ (grep describe tests / grep -lr describe tests / tests.txt), so nothing here is ever picked up by the
// passing-case yamls or impacts other consumers - only the dedicated rerun-session fixture yaml scans this dir.
// Two specs sharing a session (one passes, one fails) so the job fails and is rerun-eligible, and a failed-scope
// rerun reruns only the failing subset.
test.describe('Rerun Probe - passing', () => {
  test('passing scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test.describe('Rerun Probe - failing', () => {
  test('deliberately failing scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/ThisTitleIntentionallyDoesNotExist-RerunProbe/);
  });
});
