import {test, expect, Locator} from "@playwright/test";


test('Xpath Axes Practice', async ({page})=>{

    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    //1 Self
    const germanyCell: Locator = page.locator('//td[normalize-space()="Germany"]/self::td');
    await expect(germanyCell).toHaveText('Germany');

    //2 Parent
    const parentRow: Locator = page.locator('//td[normalize-space()="Germany"]/parent::tr');
    await expect(parentRow).toContainText('Maria Anders');
})