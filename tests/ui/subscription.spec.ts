import { randomUUID } from 'node:crypto';
import { expect, test } from '../../fixtures/uiTest';
import { FooterComponent } from '../../components/FooterComponent';
import { HomePage } from '../../pages/HomePage';
import subscriptionData from '../../test-data/subscription.json';

const createNewsletterEmail = (): string =>
  `${subscriptionData.emailPrefix}-${randomUUID()}@${subscriptionData.emailDomain}`;

test('Test Case 10: subscribe from the home page', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const footer = new FooterComponent(page);
  const email = createNewsletterEmail();

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await footer.waitUntilVisible();
  await footer.subscribe(email);

  // Assert
  await expect(footer.successMessage).toHaveText(
    subscriptionData.expectedSuccess,
  );
});

test('Test Case 11: subscribe from the Cart page', async ({ page }) => {
  // Arrange
  const footer = new FooterComponent(page);
  const email = createNewsletterEmail();

  // Act
  await page.goto('/view_cart');
  await footer.waitUntilVisible();
  await footer.subscribe(email);

  // Assert
  await expect(footer.successMessage).toHaveText(
    subscriptionData.expectedSuccess,
  );
});