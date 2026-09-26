[![Playwright Tests](https://github.com/soumyanegi21-collab/playwright-typescript-e2e-framework/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/soumyanegi21-collab/playwright-typescript-e2e-framework/actions/workflows/playwright.yml)

# Playwright TypeScript E2E Framework

A maintainable end-to-end automation framework built with Playwright and TypeScript. It supports browser-based UI coverage and API testing, with reusable page objects, fixtures, and HTML and Allure reporting.

## Framework Features

- Playwright + TypeScript
- Page Object Model
- UI Testing
- API Testing
- Data Driven Testing
- Custom Fixtures
- Environment Support through `BASE_URL` and dotenv
- Allure Reporting
- HTML Reporting
- GitHub Actions CI/CD
- Docker Support
- Cross Browser Execution with Chromium, Firefox, and WebKit

## Prerequisites

- Node.js 20 or newer
- npm

Install dependencies and the required browsers:

```bash
npm ci
npx playwright install
```

Set `BASE_URL` in the environment or a local `.env` file to target another application URL. The default URL is `https://automationexercise.com`.

## Running Tests

Run the complete test suite:

```bash
npm test
```

Run only API tests:

```bash
npm run test:api
```

Run only UI tests:

```bash
npm run test:ui
```

## Reports

The latest report from a push to `main` is published on [GitHub Pages](https://soumyanegi21-collab.github.io/playwright-typescript-e2e-framework/). The first deployment requires GitHub Pages to use **GitHub Actions** as its build and deployment source in the repository settings.

The Playwright HTML report is generated at `playwright-report/`. Open it with:

```bash
npm run report
```

Allure results are written to `allure-results/`. Generate and open the Allure report after running tests:

```bash
npm run allure:generate
npm run allure:open
```

To serve an Allure report directly from the results:

```bash
npm run allure:serve
```

## Docker

Build the Docker image from the repository root:

```bash
docker build -t playwright-ts-framework .
```

Run the tests in a container:

```bash
docker run --rm playwright-ts-framework
```

To override the target application URL, pass `BASE_URL` when starting the container:

```bash
docker run --rm -e BASE_URL=https://example.com playwright-ts-framework
```

## Roadmap

- [x] POM Architecture
- [x] API Automation
- [x] Allure Reports
- [x] GitHub Actions
- [x] Docker
- [ ] Pino Logger
- [ ] Test Retry Strategy
- [ ] Slack Notifications
- [ ] Jenkins Pipeline
- [ ] MySQL Validation
- [ ] Parallel Execution Matrix
- [ ] Visual Testing
- [ ] Test Tagging with @smoke/@regression
- [ ] Azure DevOps Pipeline