import { expect, test } from '../../fixtures/uiTest';
import { FooterComponent } from '../../components/FooterComponent';
import { CommonActions } from '../../helpers/CommonActions';
import { HomePage } from '../../pages/HomePage';

test('Test Case 25: scroll up using the arrow control', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const footer = new FooterComponent(page);
  const commonActions = new CommonActions(page);

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await commonActions.scrollToBottom();
  await footer.waitUntilVisible();
  await commonActions.scrollUpUsingArrow();

  // Assert
  await expect(footer.subscriptionTitle).not.toBeInViewport();
  await expect(homePage.tagline).toBeInViewport();
});

test('Test Case 26: scroll up without the arrow control', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const footer = new FooterComponent(page);
  const commonActions = new CommonActions(page);

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await commonActions.scrollToBottom();
  await footer.waitUntilVisible();
  await commonActions.scrollToTop();

  // Assert
  await expect(footer.subscriptionTitle).not.toBeInViewport();
  await expect(homePage.tagline).toBeInViewport();
});