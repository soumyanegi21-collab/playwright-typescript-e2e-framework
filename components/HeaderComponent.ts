import type { Locator, Page } from '@playwright/test';
import { NavigationComponent } from './NavigationComponent';

export class HeaderComponent {
  private readonly homeLink: Locator;
  private readonly navigation: NavigationComponent;

  constructor(page: Page) {
    const header = page.getByRole('banner');
    this.homeLink = header.getByRole('link', { name: /Home$/ });
    this.navigation = new NavigationComponent(page);
  }

  async waitUntilVisible(): Promise<void> {
    await this.homeLink.waitFor({ state: 'visible' });
  }

  async openTestCases(): Promise<void> {
    await this.navigation.openTestCases();
  }

  async openLogin(): Promise<void> {
    await this.navigation.openLogin();
  }

  async openProducts(): Promise<void> {
    await this.navigation.openProducts();
  }

  async openContactUs(): Promise<void> {
    await this.navigation.openContactUs();
  }
}