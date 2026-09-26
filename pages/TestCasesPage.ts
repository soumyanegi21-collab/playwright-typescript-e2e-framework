import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { EXPECTED_CONTENT, TEST_CASES } from '../constants/application';

export class TestCasesPage extends BasePage {
  private readonly pageHeading: Locator;
  private readonly testCase7Link: Locator;
  private readonly testCase7Panel: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', {
      name: EXPECTED_CONTENT.testCasesHeading,
      exact: true,
    });
    this.testCase7Link = page.getByRole('link', {
      name: TEST_CASES.verifyTestCasesPage.title,
      exact: true,
    });
    this.testCase7Panel = page.locator(
      `#collapse${TEST_CASES.verifyTestCasesPage.id}`,
    );
  }

  get heading(): Locator {
    return this.pageHeading;
  }

  getTestCaseLink(title: string): Locator {
    return this.page.getByRole('link', { name: title, exact: true });
  }

  async waitUntilVisible(): Promise<void> {
    await this.pageHeading.waitFor({ state: 'visible' });
  }

  async openTestCase7Details(): Promise<void> {
    await this.testCase7Link.click();
  }

  async waitUntilTestCase7DetailsVisible(): Promise<void> {
    await this.testCase7Panel.waitFor({ state: 'visible' });
  }

  async getTestCase7Steps(): Promise<string[]> {
    return this.testCase7Panel.getByRole('listitem').allTextContents();
  }
}