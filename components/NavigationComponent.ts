import type { Locator, Page } from '@playwright/test';

export class NavigationComponent {
  private readonly page: Page;
  private readonly homeLink: Locator;
  private readonly productsLink: Locator;
  private readonly cartLink: Locator;
  private readonly loginLink: Locator;
  private readonly testCasesLink: Locator;
  private readonly apiTestingLink: Locator;
  private readonly contactUsLink: Locator;

  constructor(page: Page) {
    this.page = page;
    const header = page.getByRole('banner');
    this.homeLink = header.getByRole('link', { name: /Home$/ });
    this.productsLink = header.getByRole('link', { name: /Products$/ });
    this.cartLink = header.getByRole('link', { name: /Cart$/ });
    this.loginLink = header.getByRole('link', { name: /Signup \/ Login$/ });
    this.testCasesLink = header.getByRole('link', { name: /Test Cases$/ });
    this.apiTestingLink = header.getByRole('link', { name: /API Testing$/ });
    this.contactUsLink = header.getByRole('link', { name: /Contact us$/i });
  }

  async openHome(): Promise<void> {
    await this.homeLink.click();
  }

  async openProducts(): Promise<void> {
    await this.productsLink.click();
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
  }

  async openLogin(): Promise<void> {
    await this.loginLink.click();
  }

  async openTestCases(): Promise<void> {
    await this.testCasesLink.click();
    await this.page.waitForURL(
      (url) => url.pathname.endsWith('/test_cases'),
      { waitUntil: 'domcontentloaded' },
    );
  }

  async openApiTesting(): Promise<void> {
    await this.apiTestingLink.click();
  }

  async openContactUs(): Promise<void> {
    await this.contactUsLink.click();
  }
}