const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('PlayWright Vanilla JS - 3', () => {
  test('Navigate PlayWright Documentation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
    await page.click('text=Get Started');
    await expect(page.locator('text=Installation').first()).toBeVisible();
    await page.click('text=Trace Viewer');
    await page.click('text=Test Generator');
    await page.click('text=Release notes');
    await page.click('text=Annotations');
    await page.click('text=API testing');
    await page.click('text=Authentication');
    await page.click('text=Command line');
    await page.click('text=Configuration');
    await page.click('text=Page Object Model');
    await page.click('text=Parameterize tests');
    await page.click('text=Reporters');
    await page.click('text=Retries');
    await page.click('text=Timeouts');
    await page.click('text=Visual comparisons');
    await page.click('text=Fixtures');
    await page.click('text=TypeScript');
    await page.click('text=Components (experimental)');
    await page.click('text=Library');
    await page.click('text=Auto-waiting');
    await page.click('text=Authentication');
    await page.click('text=Browsers');
    await page.click('text=Chrome Extensions');
    await page.click('text=Command line');
    await page.click('text=Dialogs');
    await page.click('text=Downloads');
    await page.click('text=Emulation');
    await page.click('text=Evaluating JavaScript');
    await page.click('text=Events');
    await page.click('text=Extensibility');
    await page.click('text=Frames');
    await page.click('text=Handles');
    await page.click('text=Locators');
    await page.click('text=Navigations');
    await page.click('text=Network');
    await page.click('text=Pages');
    await page.click('text=Page Object Models');
    await page.click('text=Screenshots');
    await page.click('text=Videos');
    await page.click('text=Migration');
    await page.click('text=Migrating from Protractor');
    await page.click('text=Integrations');
    await page.click('text=Docker');
    await page.click('text=Continuous Integration');
    await page.click('text=Selenium Grid');
    await page.click('text=Supported languages');
  })
})
