import type { Locator, Page } from '@playwright/test';

export class AccountPage {
  private readonly loggedInLabel: Locator;
  private readonly logoutLink: Locator;
  private readonly deleteAccountLink: Locator;
  private readonly accountDeletedMessage: Locator;
  private readonly continueLink: Locator;

  constructor(page: Page) {
    this.loggedInLabel = page.getByText(/Logged in as/);
    this.logoutLink = page.getByRole('link', { name: /Logout$/ });
    this.deleteAccountLink = page.getByRole('link', {
      name: /Delete Account$/,
    });
    this.accountDeletedMessage = page.getByRole('heading', {
      name: /^Account Deleted!$/i,
    });
    this.continueLink = page.getByRole('link', {
      name: 'Continue',
      exact: true,
    });
  }

  async waitUntilLoggedIn(): Promise<void> {
    await this.loggedInLabel.waitFor({ state: 'visible' });
  }

  get loggedInStatus(): Locator {
    return this.loggedInLabel;
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async deleteAccount(): Promise<void> {
    await this.deleteAccountLink.click();
  }

  get accountDeleted(): Locator {
    return this.accountDeletedMessage;
  }

  async continueAfterDeletion(): Promise<void> {
    await this.continueLink.click();
  }
}