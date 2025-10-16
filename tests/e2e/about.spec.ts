import { test, expect } from '@playwright/test';

/**
 * Test suite for the About page
 * Verifies that the About page loads correctly and displays all required content
 */
test.describe('About Page', () => {
  test('should navigate to about page and display main heading', async ({ page }) => {
    await page.goto('/about');
    
    // Verify page title
    await expect(page).toHaveTitle(/travel-site/i);
    
    // Verify main heading is visible
    const heading = page.getByRole('heading', { name: '关于我们', level: 1 });
    await expect(heading).toBeVisible();
    
    // Verify hero subtitle
    await expect(page.getByText('探索世界，创造美好回忆')).toBeVisible();
  });

  test('should display mission section', async ({ page }) => {
    await page.goto('/about');
    
    // Verify mission heading
    const missionHeading = page.getByRole('heading', { name: '我们的使命', level: 2 });
    await expect(missionHeading).toBeVisible();
    
    // Verify mission content
    await expect(page.getByText(/Travel Site 致力于为每一位旅行者提供独特而难忘的旅行体验/)).toBeVisible();
  });

  test('should display all three values', async ({ page }) => {
    await page.goto('/about');
    
    // Verify values section heading
    const valuesHeading = page.getByRole('heading', { name: '我们的价值观', level: 2 });
    await expect(valuesHeading).toBeVisible();
    
    // Verify all three values are displayed
    await expect(page.getByRole('heading', { name: '专业服务', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '品质保证', level: 3 })).toBeVisible();
    await expect(page.getByRole('heading', { name: '用心陪伴', level: 3 })).toBeVisible();
    
    // Verify value descriptions
    await expect(page.getByText('多年行业经验，提供专业的旅行规划和咨询服务')).toBeVisible();
    await expect(page.getByText('精选优质目的地和服务供应商，确保您的旅行体验')).toBeVisible();
    await expect(page.getByText('7×24小时客户服务，全程陪伴您的旅行之旅')).toBeVisible();
  });

  test('should display team section with all members', async ({ page }) => {
    await page.goto('/about');
    
    // Verify team section heading
    const teamHeading = page.getByRole('heading', { name: '专业团队', level: 2 });
    await expect(teamHeading).toBeVisible();
    
    // Verify all team members are displayed
    await expect(page.getByRole('heading', { name: '张明', level: 3 })).toBeVisible();
    await expect(page.getByText('创始人 & CEO')).toBeVisible();
    
    await expect(page.getByRole('heading', { name: '李娜', level: 3 })).toBeVisible();
    await expect(page.getByText('首席运营官')).toBeVisible();
    
    await expect(page.getByRole('heading', { name: '王伟', level: 3 })).toBeVisible();
    await expect(page.getByText('产品总监')).toBeVisible();
  });

  test('should display statistics section', async ({ page }) => {
    await page.goto('/about');
    
    // Verify all statistics are visible
    await expect(page.getByText('10+')).toBeVisible();
    await expect(page.getByText('年经验')).toBeVisible();
    
    await expect(page.getByText('50+')).toBeVisible();
    await expect(page.getByText('目的地')).toBeVisible();
    
    await expect(page.getByText('10k+')).toBeVisible();
    await expect(page.getByText('满意客户')).toBeVisible();
    
    await expect(page.getByText('98%')).toBeVisible();
    await expect(page.getByText('好评率')).toBeVisible();
  });

  test('should display contact section with all contact information', async ({ page }) => {
    await page.goto('/about');
    
    // Verify contact section heading
    const contactHeading = page.getByRole('heading', { name: '联系我们', level: 2 });
    await expect(contactHeading).toBeVisible();
    
    // Verify contact information
    const emailLink = page.getByRole('link', { name: 'info@travelsite.com' });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:info@travelsite.com');
    
    const phoneLink = page.getByRole('link', { name: '+86 123 4567 890' });
    await expect(phoneLink).toBeVisible();
    await expect(phoneLink).toHaveAttribute('href', 'tel:+861234567890');
    
    await expect(page.getByText('北京市朝阳区旅游大厦 100号')).toBeVisible();
  });

  test('should have navigation link to about page in header', async ({ page }) => {
    await page.goto('/');
    
    // Verify about link exists in navigation
    const aboutLink = page.getByRole('link', { name: '关于我们' });
    await expect(aboutLink).toBeVisible();
    
    // Click the link and verify navigation
    await aboutLink.click();
    await expect(page).toHaveURL('/about');
  });

  test('should navigate back to home from about page', async ({ page }) => {
    await page.goto('/about');
    
    // Click the logo or home link
    const homeLink = page.getByRole('link', { name: '首页' });
    await expect(homeLink).toBeVisible();
    
    await homeLink.click();
    await expect(page).toHaveURL('/');
  });
});
