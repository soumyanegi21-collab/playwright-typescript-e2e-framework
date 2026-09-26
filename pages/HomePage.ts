import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { URLS } from '../constants/application';

export class HomePage extends BasePage {
  private readonly header: HeaderComponent;
  private readonly homeHeading: Locator;
  private readonly heroTagline: Locator;

  constructor(page: Page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.homeHeading = page.getByRole('heading', {
      name: 'AutomationExercise',
      exact: true,
    });
    this.heroTagline = page.locator('#slider-carousel .item.active').getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers',
      exact: true,
    });
  }

  async open(): Promise<void> {
    await this.navigateTo(URLS.home);
  }

  async waitUntilVisible(): Promise<void> {
    await this.header.waitUntilVisible();
    await this.homeHeading.waitFor({ state: 'visible' });
  }

  async openTestCases(): Promise<void> {
    await this.header.openTestCases();
  }

  async openLogin(): Promise<void> {
    await this.header.openLogin();
  }

  async openProducts(): Promise<void> {
    await this.header.openProducts();
  }

  async openContactUs(): Promise<void> {
    await this.header.openContactUs();
  }

  get tagline(): Locator {
    return this.heroTagline;
  }
}