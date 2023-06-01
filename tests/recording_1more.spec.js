import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.pause()
  await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('chung123456');
  await page.getByPlaceholder('Enter your username').press('Tab');
  await page.getByPlaceholder('Enter your password').fill('123456');
  await page.getByRole('link', { name: 'Sign in' }).click();
});