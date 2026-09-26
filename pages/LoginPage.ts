import type { Locator, Page } from '@playwright/test';

export class LoginPage {
  private readonly loginForm: Locator;
  private readonly loginHeading: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly loginError: Locator;
  private readonly signupForm: Locator;
  private readonly signupHeading: Locator;
  private readonly signupNameInput: Locator;
  private readonly signupEmailInput: Locator;
  private readonly signupButton: Locator;
  private readonly signupError: Locator;

  constructor(page: Page) {
    this.loginForm = page.locator('form').filter({
      has: page.getByRole('button', { name: 'Login', exact: true }),
    });
    this.loginHeading = page.getByRole('heading', {
      name: 'Login to your account',
      exact: true,
    });
    this.emailInput = this.loginForm.getByPlaceholder('Email Address');
    this.passwordInput = this.loginForm.getByPlaceholder('Password');
    this.loginButton = this.loginForm.getByRole('button', {
      name: 'Login',
      exact: true,
    });
    this.loginError = page.getByText(
      'Your email or password is incorrect!',
      { exact: true },
    );
    this.signupForm = page.locator('form').filter({
      has: page.getByRole('button', { name: 'Signup', exact: true }),
    });
    this.signupHeading = page.getByRole('heading', {
      name: 'New User Signup!',
      exact: true,
    });
    this.signupNameInput = this.signupForm.getByPlaceholder('Name');
    this.signupEmailInput = this.signupForm.getByPlaceholder('Email Address');
    this.signupButton = this.signupForm.getByRole('button', {
      name: 'Signup',
      exact: true,
    });
    this.signupError = page.getByText('Email Address already exist!', {
      exact: true,
    });
  }

  async waitUntilVisible(): Promise<void> {
    await this.loginHeading.waitFor({ state: 'visible' });
  }

  async submitCredentials(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async beginSignup(name: string, email: string): Promise<void> {
    await this.signupHeading.waitFor({ state: 'visible' });
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  get loginErrorMessage(): Locator {
    return this.loginError;
  }

  get signupErrorMessage(): Locator {
    return this.signupError;
  }
}