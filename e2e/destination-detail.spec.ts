import { test, expect } from '@playwright/test';

test.describe('Destination Detail Page Navigation', () => {
  test('should navigate to destination detail page when clicking a destination card', async ({ page }) => {
    // Navigate to home page
    await page.goto('/');

    // Wait for destinations to load
    await page.waitForSelector('text=热门目的地');

    // Get the first destination card
    const firstCard = page.locator('a[href^="/destination/"]').first();
    await expect(firstCard).toBeVisible();

    // Get the destination name before clicking
    const destinationName = await firstCard.locator('h3').textContent();
    expect(destinationName).toBeTruthy();

    // Click on the first destination card
    await firstCard.click();

    // Verify URL changed to detail page
    await expect(page).toHaveURL(/\/destination\/\d+/);

    // Verify detail page shows the correct destination name
    await expect(page.locator('h1')).toContainText(destinationName!);

    // Verify key elements on detail page are visible
    await expect(page.locator('text=目的地介绍')).toBeVisible();
    await expect(page.locator('text=特色亮点')).toBeVisible();
    await expect(page.locator('text=位置信息')).toBeVisible();
    await expect(page.locator('text=起始价格')).toBeVisible();
    await expect(page.locator('button:has-text("立即预订")')).toBeVisible();

    // Verify back link is present
    const backLink = page.locator('a:has-text("返回目的地列表")');
    await expect(backLink).toBeVisible();

    // Test navigation back to home page
    await backLink.click();
    await expect(page).toHaveURL('/');
    await expect(page.locator('text=热门目的地')).toBeVisible();
  });

  test('should show 404 page for non-existent destination', async ({ page }) => {
    // Navigate to non-existent destination
    await page.goto('/destination/999');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Verify error message is shown
    await expect(page.locator('text=目的地不存在')).toBeVisible();
    await expect(page.locator('a:has-text("返回首页")')).toBeVisible();
  });

  test('should navigate to booking page when clicking booking button', async ({ page }) => {
    // Navigate to a destination detail page
    await page.goto('/destination/1');

    // Wait for page to load
    await page.waitForSelector('button:has-text("立即预订")');

    // Click the booking button
    await page.locator('button:has-text("立即预订")').click();

    // Verify navigation to booking page with destination ID
    await expect(page).toHaveURL(/\/booking\?destinationId=1/);
  });

  test('should display all destination information correctly', async ({ page }) => {
    // Navigate to home page first to load destinations
    await page.goto('/');
    await page.waitForSelector('text=热门目的地');

    // Navigate to first destination
    await page.goto('/destination/1');

    // Wait for content to load
    await page.waitForSelector('h1');

    // Verify hero section with image
    const heroImage = page.locator('img[alt]').first();
    await expect(heroImage).toBeVisible();

    // Verify tags are displayed
    const tags = page.locator('.px-3.py-1.bg-primary-blue\\/80');
    await expect(tags.first()).toBeVisible();

    // Verify rating is displayed
    await expect(page.locator('text=基于').first()).toBeVisible();

    // Verify price is displayed
    await expect(page.locator('text=起始价格')).toBeVisible();

    // Verify features list is displayed
    const features = page.locator('ul li:has(span:has-text("✓"))');
    await expect(features.first()).toBeVisible();

    // Verify location info is displayed
    await expect(page.locator('text=国家:')).toBeVisible();
    await expect(page.locator('text=城市:')).toBeVisible();
  });
});
