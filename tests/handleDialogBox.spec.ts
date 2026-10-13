import {test, expect} from '@playwright/test';

test('Handle Dialog Box', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Simple alert
    await page.waitForTimeout(2000);
    page.on('dialog', async dialog=>{
        console.log("Dialog message:", dialog.message());
        console.log("Sucessfully click on alert button");
        await dialog.accept();
    })
    await page.locator("//button[text()='Simple Alert']").click();
    //Confirm alert
    //promt alert
})