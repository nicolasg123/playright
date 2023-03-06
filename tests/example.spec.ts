import { test, expect } from '@playwright/test';
const URL = 'https://www.atlassian.com/';

test('test', async ({ page }) => {
  await page.goto(URL);
  await page.getByText('with teamwork').click();
  await page.getByRole('heading', { name: 'It’s possible with teamwork' }).click();
  await page.getByRole('heading', { name: 'It’s possible with teamwork' }).click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'For teams' }).click();
  await page.getByRole('link', { name: 'Support', exact: true }).click();
});



