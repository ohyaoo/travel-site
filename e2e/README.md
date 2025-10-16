# E2E Tests for Travel Site

This directory contains end-to-end tests for the Travel Site application using Playwright.

## Setup

### Install Playwright browsers

Before running the tests, you need to install the Playwright browsers:

```bash
npx playwright install chromium
```

Or install all browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests

```bash
npm run test:e2e
```

### Run tests with UI mode (interactive)

```bash
npm run test:e2e:ui
```

### Run tests in debug mode

```bash
npm run test:e2e:debug
```

### Run a specific test file

```bash
npx playwright test e2e/destination-detail.spec.ts
```

## Test Coverage

### Destination Detail Page Tests (`destination-detail.spec.ts`)

The test suite covers the following scenarios:

1. **Navigation from Home to Detail Page**
   - Clicks on a destination card from the home page
   - Verifies the URL changes to `/destination/:id`
   - Verifies the correct destination details are displayed
   - Checks all key sections are visible (介绍, 特色亮点, 位置信息, etc.)

2. **404 Handling for Non-existent Destinations**
   - Navigates to a non-existent destination ID
   - Verifies the error message is displayed
   - Checks that the "返回首页" link is present

3. **Booking Button Navigation**
   - Clicks the "立即预订" button on the detail page
   - Verifies navigation to booking page with correct query parameter
   - Ensures the destinationId is passed correctly

4. **Detail Page Information Display**
   - Verifies hero image is displayed
   - Checks tags are visible
   - Confirms rating and review count are shown
   - Validates price display
   - Ensures features list is rendered
   - Verifies location information is present

5. **Back Navigation**
   - Tests the "返回目的地列表" link
   - Verifies return to home page
   - Confirms destination list is visible again

## Configuration

The Playwright configuration is defined in `playwright.config.ts` at the project root.

Key settings:
- Base URL: `http://localhost:5173`
- Test directory: `./e2e`
- Automatic dev server startup for testing
- Full parallel test execution
- HTML reporter for test results

## Continuous Integration

The tests are configured to run in CI environments with:
- Automatic retries (2 retries in CI)
- Single worker in CI mode
- No parallel execution in CI to prevent flakiness

## Manual Verification Completed

All tests have been manually verified to work correctly:
- ✅ Navigation from home page to detail page works
- ✅ Detail page displays all information correctly
- ✅ 404 page shows for invalid destination IDs
- ✅ Booking button navigates with proper query parameters
- ✅ Back navigation returns to home page
- ✅ All UI elements render as expected

## Troubleshooting

### Browser Installation Issues

If you encounter issues installing browsers, try:

```bash
# Install with dependencies
npx playwright install --with-deps chromium

# Or use system-installed browsers
npx playwright install --no-shell
```

### Port Already in Use

If port 5173 is already in use, the dev server will not start. Either:
1. Stop the existing process using that port
2. Update the `baseURL` and `webServer.url` in `playwright.config.ts`

### Test Timeouts

If tests are timing out, you may need to increase the timeout in the test file or configuration.
