import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  // Navigate to a website
  await page.goto('https://example.com');
  
  // Check the title
  await expect(page).toHaveTitle(/Example Domain/);
  
  // Get the h1 element
  const heading = page.locator('h1');
  await expect(heading).toContainText('Example Domain');
});
