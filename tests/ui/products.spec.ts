import { expect, test } from '../../fixtures/uiTest';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import productsData from '../../test-data/products.json';

test('Test Case 9: search products by name', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const searchTerm = productsData.search.term;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openProducts();
  await productPage.waitUntilVisible();
  await productPage.searchFor(searchTerm);

  // Assert
  await expect(productPage.searchedHeading).toHaveText(
    productsData.search.expectedHeading,
  );
  const productNames = await productPage.getVisibleProductNames();
  expect(productNames.length).toBeGreaterThan(0);
  expect(productNames).toContain('Blue Top');
});