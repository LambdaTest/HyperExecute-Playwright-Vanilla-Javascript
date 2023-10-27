const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines 3', () => {
  test('Test_3', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
const msg='Please fill in the fields.'
 const a= await page.locator("//button[text()='Submit']").click()

await page.locator("//input[@id='name']").fill("Meghana")
await page.locator("//input[@id='inputEmail4']").fill("meghanakatragadda99@gmail.com")
await page.locator("//input[@id='inputPassword4']").fill("Meghana@1234")

await page.locator("//input[@id='company']").fill("ABC")
await page.locator("//input[@name='website']").fill("ABC.com")
await page.locator("//select[@name='country']").selectOption('United States')
await page.locator("//input[@name='city']").fill("NY")
await page.locator("//input[@name='address_line1']").fill("xyz")
await page.locator("//input[@name='address_line2']").fill("ghy")
await page.locator("//input[@placeholder='State']").fill("New York")
await page.locator("//input[@name='zip']").fill("37700")
await page.click("//button[text()='Submit']")
const sucmes='Thanks for contacting us, we will get back to you shortly.'
const messag=await page.locator("//p[@style='display: block;']").innerText(sucmes)

if(sucmes==messag){
    console.log(sucmes)
}
else{
    console.log('not success')
}
await page.waitForTimeout(10000)
  })
})
