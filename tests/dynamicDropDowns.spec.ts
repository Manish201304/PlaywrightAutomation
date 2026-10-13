import {test, Locator} from '@playwright/test';

test('Dyanamic drop down practice', async({page})=>{
   await page.goto('https://www.myntra.com/');
   const sbox:Locator = page.locator('input[placeholder="Search for products, brands and more"]');
   await sbox.type('Sma');
   await sbox.type('rt');
   await page.waitForTimeout(2000);
   const ddOptions:Locator = page.locator('div[class=" desktop-autoSuggest desktop-showContent"] li');
   const count = await ddOptions.count();
   console.log("Total Dropdown Options:", count);
   await page.waitForTimeout(2000);

   for(let i=0; i<count; i++){
    // const optionText = await ddOptions.nth(i).innerText();
    const optionText = await ddOptions.nth(i).textContent();
    console.log(optionText?.trim());
   }
});