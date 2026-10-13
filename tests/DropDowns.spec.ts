import {test, expect, Locator} from '@playwright/test';
test('HTML Actions Practice', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#country').selectOption({value:'india'});
    await page.waitForTimeout(2000);  
});