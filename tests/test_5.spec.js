import { test, expect } from '@playwright/test';

test('Sample test', async ({ page }) => {
    await page.goto('https://google.com');
    // await expect(page).toHaveTitle(/Example Domain/);
});
