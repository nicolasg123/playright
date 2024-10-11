import { test, expect } from '@playwright/test';
const URL = 'https://www.atlassian.com/';
const URLClarin = 'http://www.clarin.com';
const URLLinkedin = 'http://www.linkedin.com';
const URLGithub = 'https://github.com/nicolasg123';
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const EMAIL = 'nicolas.grossi@gmail.com';
const PASSWORD = 'SDET2024';



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
// Sleeps for 2 seconds.
  await sleep(2000);
});

test('test LINKEDIN', async ({ page }) => {
  await page.goto(URLLinkedin);
  await sleep(2000);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await sleep(2000);
  await page.getByLabel('Email or Phone').click();
  await sleep(2000);
  await page.getByLabel('Email or Phone').fill(EMAIL);
  await sleep(2000);
  await page.getByLabel('Password').click();
  await sleep(2000);
  await page.getByLabel('Password').fill(PASSWORD);
  await sleep(2000);
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await sleep(5000);
});

test('test github', async ({ page }) => {
  await page.goto(URLGithub);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Username or email address').click();
  await page.getByLabel('Username or email address').fill('nicolas.grossi@gmail.com');
  await page.getByLabel('Username or email address').press('Enter');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(PASSWORD);
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.goto(URLGithub);
  await page.getByRole('button', { name: 'Switch dashboard: nicolasg123' }).click();
  await page.getByRole('option', { name: 'nicolasg123' }).click();
  await page.getByRole('link', { name: 'nicolasg123/playwright' }).click();
  await page.getByRole('button', { name: 'Switch dashboard: nicolasg123' }).click();
  await page.getByRole('dialog', { name: 'Switch dashboard context' }).click();
  await page.getByRole('link', { name: 'View organization' }).click();
  await page.goto(URLGithub);
  await page.getByLabel('Open global navigation menu').click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.getByLabel('Open user navigation menu').click();
  await page.getByLabel('Your profile').click();

  

});


