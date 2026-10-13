import {test, expect, Locator} from '@playwright/test';

test('HTML Actions Practice', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const inputName: Locator =  page.locator('#name');

    await expect(inputName).toBeEnabled();

    inputName.getAttribute('maxlength').then((name) => {
        console.log('The maxlength attribute of the input field is:', name);
    });
});