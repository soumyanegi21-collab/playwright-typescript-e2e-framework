# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\authentication.spec.ts >> Test Case 3: reject invalid login credentials
- Location: tests\ui\authentication.spec.ts:10:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByText('Your email or password is incorrect!', { exact: true })
Expected: "Your email or password is incorrect!"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByText('Your email or password is incorrect!', { exact: true }) with timeout 10000ms
  - waiting for getByText('Your email or password is incorrect!', { exact: true })

```

```yaml
- banner:
  - heading "Web server is returning an unknown error Error code 520" [level=1]
  - text: Visit
  - link "cloudflare.com":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
  - text: for more information. 2026-09-26 19:59:15 UTC
- text: You
- heading "Browser" [level=3]
- text: Working
- link:
  - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Singapore
- heading "Cloudflare" [level=3]:
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
- text: Working automationexercise.com
- heading "Host" [level=3]
- text: Error
- heading "What happened?" [level=2]
- paragraph: There is an unknown connection issue between Cloudflare and the origin web server. As a result, the web page can not be displayed.
- heading "What can I do?" [level=2]
- heading "If you are a visitor of this website:" [level=3]
- paragraph: Please try again in a few minutes.
- heading "If you are the owner of this website:" [level=3]
- paragraph:
  - text: There is an issue between Cloudflare's cache and your origin web server. Cloudflare monitors for these errors and automatically investigates the cause. To help support the investigation, you can pull the corresponding error log from your web server and submit it our support team. Please include the Ray ID (which is at the bottom of this error page).
  - link "Additional troubleshooting resources":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-520/
  - text: .
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a414d91b79e6fd88
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing?utm_source=errorcode_520&utm_campaign=automationexercise.com
```

# Test source

```ts
  1  | import { randomUUID } from 'node:crypto';
  2  | import { expect, test } from '../../fixtures/uiTest';
  3  | import { AccountPage } from '../../pages/AccountPage';
  4  | import { HomePage } from '../../pages/HomePage';
  5  | import { LoginPage } from '../../pages/LoginPage';
  6  | import { RegistrationPage, type RegistrationData } from '../../pages/RegistrationPage';
  7  | import authenticationData from '../../test-data/authentication.json';
  8  | import registrationData from '../../test-data/registration.json';
  9  | 
  10 | test('Test Case 3: reject invalid login credentials', async ({ page }) => {
  11 |   // Arrange
  12 |   const homePage = new HomePage(page);
  13 |   const loginPage = new LoginPage(page);
  14 |   const invalidLogin = authenticationData.invalidLogin;
  15 | 
  16 |   // Act
  17 |   await homePage.open();
  18 |   await homePage.waitUntilVisible();
  19 |   await homePage.openLogin();
  20 |   await loginPage.waitUntilVisible();
  21 |   await loginPage.submitCredentials(invalidLogin.email, invalidLogin.password);
  22 | 
  23 |   // Assert
> 24 |   await expect(loginPage.loginErrorMessage).toHaveText(
     |                                             ^ Error: expect(locator).toHaveText(expected) failed
  25 |     invalidLogin.expectedError,
  26 |   );
  27 | });
  28 | 
  29 | test('Test Cases 2 and 4: login and logout a registered user', async ({ page }) => {
  30 |   // Arrange
  31 |   const homePage = new HomePage(page);
  32 |   const loginPage = new LoginPage(page);
  33 |   const registrationPage = new RegistrationPage(page);
  34 |   const accountPage = new AccountPage(page);
  35 |   const user = registrationData.newUser;
  36 |   const email = `${user.emailPrefix}-${randomUUID()}@${user.emailDomain}`;
  37 |   const details = user.details as RegistrationData;
  38 | 
  39 |   // Act: create a disposable user, then log out and back in with that user.
  40 |   await homePage.open();
  41 |   await homePage.waitUntilVisible();
  42 |   await homePage.openLogin();
  43 |   await loginPage.beginSignup(user.name, email);
  44 |   await registrationPage.waitUntilReady();
  45 |   await registrationPage.fillAccountDetails(details);
  46 |   await registrationPage.createAccount();
  47 |   await expect(registrationPage.accountCreated).toBeVisible();
  48 |   await registrationPage.continueToAccount();
  49 |   await accountPage.waitUntilLoggedIn();
  50 |   await accountPage.logout();
  51 |   await loginPage.waitUntilVisible();
  52 |   await loginPage.submitCredentials(email, details.password);
  53 |   await accountPage.waitUntilLoggedIn();
  54 | 
  55 |   // Assert successful login and clean up the disposable account.
  56 |   await expect(accountPage.loggedInStatus).toContainText(user.name);
  57 |   await accountPage.deleteAccount();
  58 |   await expect(accountPage.accountDeleted).toBeVisible();
  59 |   await accountPage.continueAfterDeletion();
  60 | });
  61 | 
  62 | test('Test Case 5: reject signup with an existing email', async ({ page }) => {
  63 |   test.setTimeout(60_000);
  64 | 
  65 |   // Arrange
  66 |   const homePage = new HomePage(page);
  67 |   const loginPage = new LoginPage(page);
  68 |   const registrationPage = new RegistrationPage(page);
  69 |   const accountPage = new AccountPage(page);
  70 |   const user = registrationData.newUser;
  71 |   const email = `${user.emailPrefix}-${randomUUID()}@${user.emailDomain}`;
  72 |   const details = user.details as RegistrationData;
  73 | 
  74 |   // Act: register once, log out, and retry signup with the same email.
  75 |   await homePage.open();
  76 |   await homePage.waitUntilVisible();
  77 |   await homePage.openLogin();
  78 |   await loginPage.beginSignup(user.name, email);
  79 |   await registrationPage.waitUntilReady();
  80 |   await registrationPage.fillAccountDetails(details);
  81 |   await registrationPage.createAccount();
  82 |   await expect(registrationPage.accountCreated).toBeVisible();
  83 |   await registrationPage.continueToAccount();
  84 |   await accountPage.waitUntilLoggedIn();
  85 |   await accountPage.logout();
  86 |   await loginPage.waitUntilVisible();
  87 |   await loginPage.beginSignup(user.name, email);
  88 | 
  89 |   // Assert duplicate rejection, then clean up the account created by this test.
  90 |   await expect(loginPage.signupErrorMessage).toHaveText(
  91 |     'Email Address already exist!',
  92 |   );
  93 |   await loginPage.submitCredentials(email, details.password);
  94 |   await accountPage.waitUntilLoggedIn();
  95 |   await accountPage.deleteAccount();
  96 |   await expect(accountPage.accountDeleted).toBeVisible();
  97 |   await accountPage.continueAfterDeletion();
  98 | });
```