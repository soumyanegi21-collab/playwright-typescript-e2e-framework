import { randomUUID } from 'node:crypto';
import { expect, test } from '../../fixtures/uiTest';
import { AccountPage } from '../../pages/AccountPage';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { RegistrationPage, type RegistrationData } from '../../pages/RegistrationPage';
import authenticationData from '../../test-data/authentication.json';
import registrationData from '../../test-data/registration.json';

test('Test Case 3: reject invalid login credentials', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const invalidLogin = authenticationData.invalidLogin;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openLogin();
  await loginPage.waitUntilVisible();
  await loginPage.submitCredentials(invalidLogin.email, invalidLogin.password);

  // Assert
  await expect(loginPage.loginErrorMessage).toHaveText(
    invalidLogin.expectedError,
  );
});

test('Test Cases 2 and 4: login and logout a registered user', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const registrationPage = new RegistrationPage(page);
  const accountPage = new AccountPage(page);
  const user = registrationData.newUser;
  const email = `${user.emailPrefix}-${randomUUID()}@${user.emailDomain}`;
  const details = user.details as RegistrationData;

  // Act: create a disposable user, then log out and back in with that user.
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openLogin();
  await loginPage.beginSignup(user.name, email);
  await registrationPage.waitUntilReady();
  await registrationPage.fillAccountDetails(details);
  await registrationPage.createAccount();
  await expect(registrationPage.accountCreated).toBeVisible();
  await registrationPage.continueToAccount();
  await accountPage.waitUntilLoggedIn();
  await accountPage.logout();
  await loginPage.waitUntilVisible();
  await loginPage.submitCredentials(email, details.password);
  await accountPage.waitUntilLoggedIn();

  // Assert successful login and clean up the disposable account.
  await expect(accountPage.loggedInStatus).toContainText(user.name);
  await accountPage.deleteAccount();
  await expect(accountPage.accountDeleted).toBeVisible();
  await accountPage.continueAfterDeletion();
});

test('Test Case 5: reject signup with an existing email', async ({ page }) => {
  test.setTimeout(60_000);

  // Arrange
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const registrationPage = new RegistrationPage(page);
  const accountPage = new AccountPage(page);
  const user = registrationData.newUser;
  const email = `${user.emailPrefix}-${randomUUID()}@${user.emailDomain}`;
  const details = user.details as RegistrationData;

  // Act: register once, log out, and retry signup with the same email.
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openLogin();
  await loginPage.beginSignup(user.name, email);
  await registrationPage.waitUntilReady();
  await registrationPage.fillAccountDetails(details);
  await registrationPage.createAccount();
  await expect(registrationPage.accountCreated).toBeVisible();
  await registrationPage.continueToAccount();
  await accountPage.waitUntilLoggedIn();
  await accountPage.logout();
  await loginPage.waitUntilVisible();
  await loginPage.beginSignup(user.name, email);

  // Assert duplicate rejection, then clean up the account created by this test.
  await expect(loginPage.signupErrorMessage).toHaveText(
    'Email Address already exist!',
  );
  await loginPage.submitCredentials(email, details.password);
  await accountPage.waitUntilLoggedIn();
  await accountPage.deleteAccount();
  await expect(accountPage.accountDeleted).toBeVisible();
  await accountPage.continueAfterDeletion();
});