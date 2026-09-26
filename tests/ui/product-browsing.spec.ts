import { expect, test } from '../../fixtures/uiTest';
import { HomePage } from '../../pages/HomePage';
import { ProductPage } from '../../pages/ProductPage';
import productsData from '../../test-data/products.json';

test('Test Case 18: view products by category', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const category = productsData.category;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await productPage.openCategory(category.route);

  // Assert
  await expect(
    productPage.getCategoryHeading(category.name, category.subcategory),
  ).toBeVisible();
  expect(await productPage.getVisibleProductNames()).toContain(
    category.expectedProduct,
  );
});

test('Test Case 19: view products by brand', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const brand = productsData.brand;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openProducts();
  await productPage.waitUntilVisible();
  await productPage.openBrand(brand.name);

  // Assert
  await expect(productPage.getBrandHeading(brand.name)).toBeVisible();
  expect(await productPage.getVisibleProductNames()).toContain(
    brand.expectedProduct,
  );
});