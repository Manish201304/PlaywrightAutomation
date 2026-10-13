import {test, expect} from "@playwright/test";

test("Verify the page title: ", async({page})=>{
    await page.goto("https://www.amazon.in/");

    let title:string  = await page.title();
    console.log(title);

   await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

})