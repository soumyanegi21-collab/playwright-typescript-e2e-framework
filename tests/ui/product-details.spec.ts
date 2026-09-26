import { expect, test } from '../../fixtures/uiTest';
import { HomePage } from '../../pages/HomePage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { ProductPage } from '../../pages/ProductPage';
import productsData from '../../test-data/products.json';

test('Test Cases 8 and 13: inspect a product and set its quantity', async ({
  page,
}) => {
  // Arrange
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const productName = productsData.cartProduct.name;
  const quantity = productsData.cartProduct.quantity;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openProducts();
  await productPage.waitUntilVisible();
  await productPage.openProductDetails(productName);
  await productDetailsPage.waitUntilVisible();
  await productDetailsPage.setQuantity(quantity);

  // Assert product details and quantity entry are available as documented.
  await expect(productDetailsPage.quantity).toHaveValue(String(quantity));
  await expect(productDetailsPage.addToCart).toBeVisible();
  await expect(productDetailsPage.productAvailability).toBeVisible();
  await expect(productDetailsPage.productCondition).toBeVisible();
  await expect(productDetailsPage.productBrand).toBeVisible();
});