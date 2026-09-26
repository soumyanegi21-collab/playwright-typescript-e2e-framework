import type { Locator, Page } from '@playwright/test';

export class ProductPage {
  private readonly page: Page;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly productsHeading: Locator;
  private readonly searchedProductsHeading: Locator;
  private readonly productCards: Locator;
  private readonly brandsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByPlaceholder('Search Product');
    this.searchButton = page
      .getByRole('button')
      .filter({ has: page.locator('i.fa-search') });
    this.productsHeading = page.getByRole('heading', {
      name: 'All Products',
      exact: true,
    });
    this.searchedProductsHeading = page.getByRole('heading', {
      name: /^Searched Products$/i,
    });
    this.productCards = page.locator('.product-image-wrapper');
    this.brandsSection = page.locator('.brands_products');
  }

  async waitUntilVisible(): Promise<void> {
    await this.productsHeading.waitFor({ state: 'visible' });
  }

  async searchFor(term: string): Promise<void> {
    await this.searchInput.fill(term);
    await this.searchButton.click();
    await this.page.waitForURL(
      (url) => url.searchParams.get('search') === term,
      { waitUntil: 'domcontentloaded' },
    );
    await this.searchedProductsHeading.waitFor({ state: 'visible' });
  }

  get searchedHeading(): Locator {
    return this.searchedProductsHeading;
  }

  async getVisibleProductNames(): Promise<string[]> {
    return this.page
      .locator('.product-image-wrapper .productinfo p')
      .allTextContents();
  }

  private productCard(productName: string): Locator {
    return this.productCards.filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async openProductDetails(productName: string): Promise<void> {
    const card = this.productCard(productName).first();
    await card.getByRole('link', { name: /View Product$/ }).click();
  }

  async openCategory(route: string): Promise<void> {
    await this.page.goto(route);
  }

  async openBrand(brand: string): Promise<void> {
    await this.brandsSection
      .getByRole('link', { name: new RegExp(`${brand}$`) })
      .click();
  }

  getCategoryHeading(category: string, subcategory: string): Locator {
    return this.page.getByRole('heading', {
      name: `${category} - ${subcategory} Products`,
      exact: true,
    });
  }

  getBrandHeading(brand: string): Locator {
    return this.page.getByRole('heading', {
      name: `Brand - ${brand} Products`,
      exact: true,
    });
  }
}