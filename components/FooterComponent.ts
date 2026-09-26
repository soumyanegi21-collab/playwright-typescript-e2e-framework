import type { Locator, Page } from '@playwright/test';

export class FooterComponent {
  private readonly footer: Locator;
  private readonly subscriptionHeading: Locator;
  private readonly emailInput: Locator;
  private readonly subscribeButton: Locator;
  private readonly subscriptionSuccess: Locator;

  constructor(page: Page) {
    this.footer = page.getByRole('contentinfo');
    this.subscriptionHeading = this.footer.getByRole('heading', {
      name: 'Subscription',
      exact: true,
    });
    this.emailInput = this.footer.getByRole('textbox', {
      name: 'Your email address',
    });
    this.subscribeButton = this.footer.getByRole('button');
    this.subscriptionSuccess = page.getByText(
      'You have been successfully subscribed!',
      { exact: true },
    );
  }

  async waitUntilVisible(): Promise<void> {
    await this.subscriptionHeading.waitFor({ state: 'visible' });
  }

  get subscriptionTitle(): Locator {
    return this.subscriptionHeading;
  }

  async subscribe(email: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }

  get successMessage(): Locator {
    return this.subscriptionSuccess;
  }
}