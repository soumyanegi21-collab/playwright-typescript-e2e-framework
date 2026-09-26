import { expect, test } from '../../fixtures/uiTest';
import { HomePage } from '../../pages/HomePage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
import { ProductPage } from '../../pages/ProductPage';
import productsData from '../../test-data/products.json';

test('Test Case 21: submit a product review', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const productDetailsPage = new ProductDetailsPage(page);
  const productName = productsData.cartProduct.name;
  const review = productsData.review;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openProducts();
  await productPage.waitUntilVisible();
  await productPage.openProductDetails(productName);
  await productDetailsPage.waitUntilVisible();
  await productDetailsPage.submitReview(
    review.name,
    review.email,
    review.message,
  );

  // Assert
  await expect(productDetailsPage.reviewSubmissionSuccess).toBeVisible();
});