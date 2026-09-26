import { randomUUID } from 'node:crypto';
import { expect, test } from '../../fixtures/uiTest';
import { AccountPage } from '../../pages/AccountPage';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import {
  RegistrationPage,
  type RegistrationData,
} from '../../pages/RegistrationPage';
import registrationData from '../../test-data/registration.json';

test('Test Case 1: register and delete a user', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const registrationPage = new RegistrationPage(page);
  const accountPage = new AccountPage(page);
  const user = registrationData.newUser;
  const email = `${user.emailPrefix}-${randomUUID()}@${user.emailDomain}`;
  const details = user.details as RegistrationData;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openLogin();
  await loginPage.beginSignup(user.name, email);
  await registrationPage.waitUntilReady();
  await registrationPage.fillAccountDetails(details);
  await registrationPage.createAccount();

  // Assert account creation, then remove test data created by this run.
  await expect(registrationPage.accountCreated).toBeVisible();
  await registrationPage.continueToAccount();
  await accountPage.waitUntilLoggedIn();
  await accountPage.deleteAccount();
  await expect(accountPage.accountDeleted).toBeVisible();
  await accountPage.continueAfterDeletion();
});