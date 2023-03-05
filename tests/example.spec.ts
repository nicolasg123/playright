import { test, expect } from '@playwright/test';
const URL = 'https://www.atlassian.com/';

test('has title', async ({ page }) => {
  await page.goto(URL);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Collaboration/);
});

test('atlassian logo click', async ({ page }) => {
    await page.goto(URL);
    page.getByAltText("Atlassian logo").click    
});

test('products click', async ({ page }) => {
  await page.goto(URL);
  page.getByText("Products").click  
});


test('test 3', async ({ page }) => {
  await page.goto(URL);
  expect(await page.innerText("h1")).toContain("It’s possible")

});



