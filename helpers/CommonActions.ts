import type { Locator, Page } from '@playwright/test';

export class CommonActions {
  private readonly page: Page;
  private readonly scrollUpLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.scrollUpLink = page.locator('#scrollUp');
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() =>
      window.scrollTo(0, document.documentElement.scrollHeight),
    );
  }

  async scrollUpUsingArrow(): Promise<void> {
    await this.scrollUpLink.click();
  }
}