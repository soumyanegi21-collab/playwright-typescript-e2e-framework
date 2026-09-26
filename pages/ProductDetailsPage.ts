import type { Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  private readonly page: Page;
  private readonly productHeading: Locator;
  private readonly quantityInput: Locator;
  private readonly addToCartButton: Locator;
  private readonly availability: Locator;
  private readonly condition: Locator;
  private readonly brand: Locator;
  private readonly reviewNameInput: Locator;
  private readonly reviewEmailInput: Locator;
  private readonly reviewTextInput: Locator;
  private readonly reviewSubmitButton: Locator;
  private readonly reviewSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productHeading = page.getByRole('heading', {
      name: 'Blue Top',
      exact: true,
    });
    this.quantityInput = page.getByRole('spinbutton');
    this.addToCartButton = page.getByRole('button', {
      name: /Add to cart$/,
    });
    this.availability = page.getByText('Availability: In Stock', {
      exact: true,
    });
    this.condition = page.getByText('Condition: New', { exact: true });
    this.brand = page.getByText('Brand: Polo', { exact: true });
    this.reviewNameInput = page.getByRole('textbox', {
      name: 'Your Name',
      exact: true,
    });
    this.reviewEmailInput = page.getByRole('textbox', {
      name: 'Email Address',
      exact: true,
    });
    this.reviewTextInput = page.getByRole('textbox', {
      name: 'Add Review Here!',
      exact: true,
    });
    this.reviewSubmitButton = page.getByRole('button', {
      name: 'Submit',
      exact: true,
    });
    this.reviewSuccess = page.getByText(/Thank you for your review/i);
  }

  async waitUntilVisible(): Promise<void> {
    await this.productHeading.waitFor({ state: 'visible' });
  }

  async setQuantity(quantity: number): Promise<void> {
    await this.quantityInput.fill(String(quantity));
  }

  get quantity(): Locator {
    return this.quantityInput;
  }

  get addToCart(): Locator {
    return this.addToCartButton;
  }

  get productAvailability(): Locator {
    return this.availability;
  }

  get productCondition(): Locator {
    return this.condition;
  }

  get productBrand(): Locator {
    return this.brand;
  }

  async submitReview(name: string, email: string, review: string): Promise<void> {
    await this.reviewNameInput.fill(name);
    await this.reviewEmailInput.fill(email);
    await this.reviewTextInput.fill(review);
    await this.reviewSubmitButton.click();
  }

  get reviewSubmissionSuccess(): Locator {
    return this.reviewSuccess;
  }
}