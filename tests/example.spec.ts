import { test, expect } from '@playwright/test';
const URL = 'https://www.atlassian.com/';
const URLClarin = 'http://www.clarin.com';


test('test Atlassian', async ({ page }) => {
  await page.goto(URL);
  page.getByText('with teamwork').isVisible
  page.getByRole('heading', { name: 'It’s possible with teamwork' }).isVisible
  page.getByRole('link', { name: 'Products', exact: true }).isVisible;
  page.getByRole('link', { name: 'For teams' }).isVisible
  page.getByRole('link', { name: 'Support', exact: true }).isVisible
});


test('test Clarin', async ({ page }) => {
  await page.goto(URLClarin);
  page.getByRole('link', { name: 'Último Momento' }).nth(1).isVisible
  page.getByRole('link', { name: 'Política' }).nth(1).isVisible
  page.getByRole('link', { name: 'Claringrilla' }).nth(1).isVisible
});

test('test Clarin2', async ({ page }) => {
  await page.goto(URLClarin);
  await page.click('svg#Capa_1')
  await page.click('span.mount')
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
// Sleeps for 2 seconds.
  await sleep(2000);
});
