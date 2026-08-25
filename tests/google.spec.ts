import { test, expect } from '@playwright/test';

test('opens google.com', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
