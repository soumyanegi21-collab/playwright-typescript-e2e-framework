import type { Locator, Page } from '@playwright/test';

export class CartPage {
  private readonly page: Page;
  private readonly cartHeading: Locator;
  private readonly cartRows: Locator;
  private readonly emptyCartMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartHeading = page.getByText('Shopping Cart', { exact: true });
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.emptyCartMessage = page.getByText(/Cart is empty/i);
  }

  async open(): Promise<void> {
    await this.page.goto('/view_cart');
  }

  async waitUntilVisible(): Promise<void> {
    await this.cartHeading.waitFor({ state: 'visible' });
  }

  productRow(productName: string): Locator {
    return this.cartRows.filter({ hasText: productName });
  }

  async getProductNames(): Promise<string[]> {
    return this.cartRows
      .locator('.cart_description h4 a')
      .allTextContents();
  }

  async removeProduct(productName: string): Promise<void> {
    const row = this.productRow(productName);
    await row.locator('.cart_quantity_delete').click();
    await row.waitFor({ state: 'detached' });
  }

  get emptyMessage(): Locator {
    return this.emptyCartMessage;
  }
}