import dotenv from 'dotenv';
import { defineConfig, devices } from '@playwright/test';

dotenv.config();

const baseURL = process.env.BASE_URL ?? 'https://automationexercise.com';
const isCI = Boolean(process.env.CI);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: 1,
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  outputDir: 'reports/test-results',
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { resultsDir: 'allure-results' }],
  ],
  use: {
    baseURL,
    testIdAttribute: 'data-qa',
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      testMatch: '**/ui/**/*.spec.ts',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      testMatch: '**/ui/**/*.spec.ts',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      testMatch: '**/ui/**/*.spec.ts',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'api',
      testMatch: '**/api/**/*.spec.ts',
    },
  ],
});