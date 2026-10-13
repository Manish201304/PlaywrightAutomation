import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log('This is before each hook');
});

test.afterEach(async ({ page }) => {
    console.log('This is after each hook');
});

test('Test 1', async () => {
    console.log('This is test 1');
});
test('Test 2', async () => {
    console.log('This is test 2');
});