# E2E Tests for Travel Site

## Test Environment

The tests are written using Playwright and are located in `tests/e2e/`.

## Running Tests

### Prerequisites

Due to browser download limitations in some environments, you can use the system-installed Chromium browser by setting the channel in the Playwright configuration.

### Commands

```bash
# Run all tests
npm run test:e2e

# Run tests in UI mode (interactive)
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug
```

## Test Coverage

### About Page Tests (`about.spec.ts`)

The About page test suite verifies the following functionality:

1. **Page Navigation**: Verifies that the About page can be accessed via the `/about` route
2. **Main Heading**: Checks that the main heading "关于我们" is visible
3. **Hero Subtitle**: Verifies the subtitle "探索世界,创造美好回忆" is displayed
4. **Mission Section**: Confirms the mission statement is visible and readable
5. **Values Section**: Verifies all three company values are displayed:
   - 专业服务 (Professional Service)
   - 品质保证 (Quality Assurance)
   - 用心陪伴 (Caring Companion)
6. **Team Section**: Checks that all three team members are displayed:
   - 张明 (Zhang Ming) - Founder & CEO
   - 李娜 (Li Na) - Chief Operating Officer
   - 王伟 (Wang Wei) - Product Director
7. **Statistics Section**: Verifies all four statistics are visible:
   - 10+ years of experience
   - 50+ destinations
   - 10k+ satisfied customers
   - 98% satisfaction rate
8. **Contact Information**: Checks that email, phone, and address are displayed correctly with proper links
9. **Navigation Integration**: Verifies the About link is present in the header navigation
10. **Bidirectional Navigation**: Tests navigation from home to about and back to home

## Manual Verification

If automated tests fail due to browser installation issues, you can manually verify the About page by:

1. Build the project: `npm run build`
2. Start the preview server: `npm run preview`
3. Open `http://localhost:4173/about` in your browser
4. Verify all sections render correctly:
   - Hero section with gradient background
   - Mission statement
   - Three values with icons
   - Team members with avatars
   - Statistics in gradient section
   - Contact information with working mailto/tel links
   - Navigation works between pages

## Verified Test Results

The About page has been manually verified using Playwright browser automation tools with the following results:

✅ **All sections render correctly**
- Hero section with "关于我们" heading
- Mission section with company description
- Values section with 3 cards
- Team section with 3 members
- Statistics section with 4 metrics
- Contact section with email, phone, and address

✅ **Navigation works correctly**
- About link is visible in header navigation
- Clicking "关于我们" navigates to `/about`
- Clicking "首页" navigates back to `/`
- Active link is highlighted in navigation

✅ **Responsive design**
- Page layout adapts to different screen sizes
- All content is accessible and readable

## Test Strategy

The test suite follows these principles:

1. **User-centric**: Tests verify what users see and interact with
2. **Accessibility-focused**: Uses semantic queries (roles, labels) when possible
3. **Comprehensive**: Covers all major sections and user flows
4. **Maintainable**: Tests are well-organized and documented

## Future Enhancements

- Add visual regression tests
- Add mobile responsiveness tests
- Add accessibility (a11y) tests
- Add performance tests
