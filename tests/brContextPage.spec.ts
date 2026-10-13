import {test, expect, Page, chromium, firefox, webkit} from '@playwright/test'

test('Broswer Context Page', async ()=>{
    // const browser = await chromium.launch();
    // const browser = await firefox.launch();
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');
})