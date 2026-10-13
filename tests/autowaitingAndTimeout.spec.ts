import {test, expect} from '@playwright/test';

test('Auto Waiting and Timeout', async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');

    //Assertions
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/');
    await expect(page.locator('p:nth-child(1)')).toHaveText('Welcome to the new Tricentis store!',{timeout:10000});

    //Actions
    await page.locator('#small-searchterms').fill('laptop', {force: true});
    await page.locator('input[type="submit"]').click({force: true});

});