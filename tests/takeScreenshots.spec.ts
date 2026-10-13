import {test, expect} from '@playwright/test';

test('Take ScreentShots', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Take Screenshot 
    const date = Date.now();
    await page.screenshot({path:'Screenshots/demo'+date+'.png'});

    //Take full page screenshot
    await page.screenshot({path:'Screenshots/fullpage'+date+'.png', fullPage: true});

});