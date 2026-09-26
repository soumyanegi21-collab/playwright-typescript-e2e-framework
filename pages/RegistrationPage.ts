import type { Locator, Page } from '@playwright/test';

export type RegistrationData = {
  title: 'Mr.' | 'Mrs.';
  password: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  newsletter: boolean;
  partnerOffers: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

export class RegistrationPage {
  private readonly accountInformationHeading: Locator;
  private readonly mrTitleOption: Locator;
  private readonly mrsTitleOption: Locator;
  private readonly passwordInput: Locator;
  private readonly birthDaySelect: Locator;
  private readonly birthMonthSelect: Locator;
  private readonly birthYearSelect: Locator;
  private readonly newsletterCheckbox: Locator;
  private readonly partnerOffersCheckbox: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly companyInput: Locator;
  private readonly addressInput: Locator;
  private readonly address2Input: Locator;
  private readonly countrySelect: Locator;
  private readonly stateInput: Locator;
  private readonly cityInput: Locator;
  private readonly zipcodeInput: Locator;
  private readonly mobileNumberInput: Locator;
  private readonly createAccountButton: Locator;
  private readonly accountCreatedMessage: Locator;
  private readonly continueLink: Locator;

  constructor(page: Page) {
    this.accountInformationHeading = page.getByRole('heading', {
      name: /ENTER ACCOUNT INFORMATION/i,
    });
    this.mrTitleOption = page.getByRole('radio', { name: 'Mr.', exact: true });
    this.mrsTitleOption = page.getByRole('radio', { name: 'Mrs.', exact: true });
    this.passwordInput = page.getByLabel('Password');
    this.birthDaySelect = page.locator('#days');
    this.birthMonthSelect = page.locator('#months');
    this.birthYearSelect = page.locator('#years');
    this.newsletterCheckbox = page.getByRole('checkbox', {
      name: /Sign up for our newsletter/i,
    });
    this.partnerOffersCheckbox = page.getByRole('checkbox', {
      name: /Receive special offers from our partners/i,
    });
    this.firstNameInput = page.getByLabel('First name');
    this.lastNameInput = page.getByLabel('Last name');
    this.companyInput = page.getByRole('textbox', {
      name: 'Company',
      exact: true,
    });
    this.addressInput = page.getByRole('textbox', { name: /^Address \*/ });
    this.address2Input = page.getByLabel('Address 2');
    this.countrySelect = page.getByLabel('Country');
    this.stateInput = page.getByLabel('State');
    this.cityInput = page.getByRole('textbox', { name: /^City \*/ });
    this.zipcodeInput = page.getByTestId('zipcode');
    this.mobileNumberInput = page.getByLabel('Mobile Number');
    this.createAccountButton = page.getByRole('button', {
      name: 'Create Account',
      exact: true,
    });
    this.accountCreatedMessage = page.getByRole('heading', {
      name: /^Account Created!$/i,
    });
    this.continueLink = page.getByRole('link', {
      name: 'Continue',
      exact: true,
    });
  }

  async waitUntilReady(): Promise<void> {
    await this.accountInformationHeading.waitFor({ state: 'visible' });
  }

  async fillAccountDetails(details: RegistrationData): Promise<void> {
    if (details.title === 'Mrs.') {
      await this.mrsTitleOption.check();
    } else {
      await this.mrTitleOption.check();
    }

    await this.passwordInput.fill(details.password);
    await this.birthDaySelect.selectOption({ label: details.birthDay });
    await this.birthMonthSelect.selectOption({ label: details.birthMonth });
    await this.birthYearSelect.selectOption({ label: details.birthYear });

    if (details.newsletter) {
      await this.newsletterCheckbox.check();
    }
    if (details.partnerOffers) {
      await this.partnerOffersCheckbox.check();
    }

    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.companyInput.fill(details.company);
    await this.addressInput.fill(details.address);
    await this.address2Input.fill(details.address2);
    await this.countrySelect.selectOption({ label: details.country });
    await this.stateInput.fill(details.state);
    await this.cityInput.fill(details.city);
    await this.zipcodeInput.fill(details.zipcode);
    await this.mobileNumberInput.fill(details.mobileNumber);
  }

  async createAccount(): Promise<void> {
    await this.createAccountButton.click();
  }

  get accountCreated(): Locator {
    return this.accountCreatedMessage;
  }

  async continueToAccount(): Promise<void> {
    await this.continueLink.click();
  }
}