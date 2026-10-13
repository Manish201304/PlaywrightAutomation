import { expect, test } from '@playwright/test';
// import data from '../TestData/postAPIPayload.json';

test('Post API Request Static', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users/549');

  expect(response.status()).toBe(201);
  expect(response.ok()).toBeTruthy();

  const responseBody = await response.json();
  console.log('post response data: ', JSON.stringify(responseBody, null, 2));
  expect(responseBody).toHaveProperty('id1');
  expect(responseBody).toHaveProperty('createdAt');
});