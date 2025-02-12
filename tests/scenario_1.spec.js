/*
Note:
  As per the importat instruction "Please ensure to use at least 3 different locators while performing the test."
  creating 3 locators (locator1, locator2 and locato3) to identify same element.
*/

const { test } = require('./lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Simple Form Demo', () => {
  test('Validate the generated text message', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

// Navigate to :https://www.lambdatest.com/selenium-playground
  await page.goto('https://www.lambdatest.com/selenium-playground/',{ waitUntil: 'networkidle' });

// Click “Simple Form Demo” link
  let locator1 = 'a[href="https://www.lambdatest.com/selenium-playground/simple-form-demo"]';
  let locator2 = 'li a[href*="simple-form-demo"]';
  let locator3 = 'li a:has-text("Simple Form Demo")';

  await page.locator(`:is(${locator1},${locator2}, ${locator3})`).click();

// Validate that the URL contains “simple-form-demo”.
  await expect(page).toHaveURL(/.*simple-form-demo/);

// Create a variable for a string value e.g.: “Welcome toLambdaTest”.
  const serachText = 'Welcome toLambdaTest';

  // Use this variable to enter values in the “Enter Message” text box.
  const parentSelector = 'div:has-text("Single Input Field")';
  locator1 = 'input[id="user-message"]';
  locator2 = 'input[placeholder="Please enter your Message"]';
  locator3 = 'input[class="border border-gray-550 w-full h-35 rounded px-10"]';

  await page.fill(`:is(${locator1}, ${locator2}, ${locator3})`, serachText);


// Click “Get Checked Value”.
  locator1 = 'button[id="showInput"]';
  locator2 ='input[id="user-message"] + button';
  locator3 ='div[class="px-10 pt-20 pb-5"] button[type="button"]';

  await page.locator(`:is(${locator1}, ${locator2}), ${locator3}`).click();
  await page.waitForSelector('#message');

// Validate whether the same text message is displayed in the right-hand panel under the “Your Message:” section
  locator1 = '#message';
  locator2 ='#user-message #message';
  locator3 =`p:has-text("${serachText}")`;
  
  const searchMessage = await page.locator(`:is(${locator1}, ${locator2}, ${locator3})`).textContent(serachText);
  await expect(searchMessage).toEqual(serachText);

  })
})
