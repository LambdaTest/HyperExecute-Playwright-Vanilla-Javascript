/*
Note:
  As per the importat instruction "Please ensure to use at least 3 different locators while performing the test."
  creating 3 locators (locator1, locator2 and locato3) to identify same element.
*/

const { test } = require('./lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('scenario "Drag & Drop Sliders"', () => {
  test('Validate the slider functionality', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });

// Navigate to :https://www.lambdatest.com/selenium-playground
  await page.goto('https://www.lambdatest.com/selenium-playground/',{ waitUntil: 'networkidle' });

// Click “Simple Form Demo” link
  let locator1 = 'a[href="https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo"]';
  let locator2 = 'li a[href*="drag-drop-range-sliders-demo"]';
  let locator3 = 'li a:has-text("Drag & Drop Sliders")';

  await page.locator(`:is(${locator1},${locator2}, ${locator3})`).click();


// Get the initial value of Sliderbar befor dragging:
  locator1 = 'input[value="15"]';
  locator2 = 'div[class="sp__range sp__range-success"] input';
  locator3 = 'div[id="slider3"] input';

  const slider =  page.locator(`:is(${locator1}, ${locator2}, ${locator3})`);
  const initialSliderValue = await slider.inputValue();
  await expect(initialSliderValue).toBe('15');

// Get the bounding Box for Sliderbar
  const sliderBar = await slider.boundingBox();
  const sliderWidth = sliderBar?.width || 0;

  const start15 = (15 / 100) * sliderWidth; 
  const end95 = (93 / 100) * sliderWidth; 

// Drag and Drop: click and hold mouse to drag the slider to value 95:
  await page.mouse.move(sliderBar.x + start15, sliderBar.y + sliderBar.height / 2);  
  await page.mouse.down();
  await page.mouse.move(sliderBar.x + end95, sliderBar.y + sliderBar.height / 2);
  await page.mouse.up();

  // validate if the output value od slider is 95:
    locator1 = 'output[id="rangeSuccess"]';
    locator2 = 'div[class="sp__range sp__range-success"] output';
    locator3 = 'div[id="slider3"] output';

    const outputValue = await page.locator(`:is(${locator1}, ${locator2}, ${locator3})`).textContent();
    expect(outputValue).toBe('95');

  })
})
