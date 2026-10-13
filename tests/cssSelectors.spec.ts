import {test, expect, Locator} from "@playwright/test"

test('Css Selector Practice', async({page})=>{
await page.goto('https://demowebshop.tricentis.com/');

const searchBox: Locator = page.locator('input#small-searchterms');
await searchBox.fill('Books');

})