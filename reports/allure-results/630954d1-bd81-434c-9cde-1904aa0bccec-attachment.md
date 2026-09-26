# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\authentication.spec.ts >> Test Case 5: reject signup with an existing email
- Location: tests\ui\authentication.spec.ts:62:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('form').filter({ has: getByRole('button', { name: 'Login', exact: true }) }).getByRole('button', { name: 'Login', exact: true })
    - locator resolved to <button type="submit" data-qa="login-button" class="btn btn-default">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [ref=f6e1]:
  - banner [ref=f6e2]:
    - generic [ref=f6e5]:
      - link [ref=f6e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f6e9]
      - list [ref=f6e12]:
        - listitem [ref=f6e13]:
          - link " Home" [ref=f6e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f6e15]: 
            - text: Home
        - listitem [ref=f6e16]:
          - link " Products" [ref=f6e17] [cursor=pointer]:
            - /url: /products
        - listitem [ref=f6e18]:
          - link " Cart" [ref=f6e19] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f6e20]: 
            - text: Cart
        - listitem [ref=f6e21]:
          - link " Signup / Login" [ref=f6e22] [cursor=pointer]:
            - /url: /login
            - generic [ref=f6e23]: 
            - text: Signup / Login
        - listitem [ref=f6e24]:
          - link " Test Cases" [ref=f6e25] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f6e26]: 
            - text: Test Cases
        - listitem [ref=f6e27]:
          - link " API Testing" [ref=f6e28] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f6e29]: 
            - text: API Testing
        - listitem [ref=f6e30]:
          - link " Video Tutorials" [ref=f6e31] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f6e32]: 
            - text: Video Tutorials
        - listitem [ref=f6e33]:
          - link " Contact us" [ref=f6e34] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f6e35]: 
            - text: Contact us
  - generic [ref=f6e38]:
    - generic [ref=f6e40]:
      - heading "Login to your account" [level=2] [ref=f6e41]
      - generic [ref=f6e42]:
        - textbox "Email Address" [ref=f6e43]: framework-user-f80ae57d-7339-4bad-affc-b2e78a347b94@example.com
        - textbox "Password" [active] [ref=f6e44]: FrameworkTest123!
        - button "Login" [ref=f6e45] [cursor=pointer]
    - heading "OR" [level=2] [ref=f6e47]
    - generic [ref=f6e49]:
      - heading "New User Signup!" [level=2] [ref=f6e50]
      - generic [ref=f6e51]:
        - textbox "Name" [ref=f6e52]: Framework Test User
        - textbox "Email Address" [ref=f6e53]: framework-user-f80ae57d-7339-4bad-affc-b2e78a347b94@example.com
        - paragraph [ref=f6e54]: Email Address already exist!
        - button "Signup" [ref=f6e55] [cursor=pointer]
  - contentinfo [ref=f6e56]:
    - generic [ref=f6e61]:
      - heading "Subscription" [level=2] [ref=f6e62]
      - generic [ref=f6e63]:
        - textbox "Your email address" [ref=f6e64]
        - button "" [ref=f6e65] [cursor=pointer]
        - paragraph [ref=f6e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f6e71]: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   private readonly loginForm: Locator;
  5  |   private readonly loginHeading: Locator;
  6  |   private readonly emailInput: Locator;
  7  |   private readonly passwordInput: Locator;
  8  |   private readonly loginButton: Locator;
  9  |   private readonly loginError: Locator;
  10 |   private readonly signupForm: Locator;
  11 |   private readonly signupHeading: Locator;
  12 |   private readonly signupNameInput: Locator;
  13 |   private readonly signupEmailInput: Locator;
  14 |   private readonly signupButton: Locator;
  15 |   private readonly signupError: Locator;
  16 | 
  17 |   constructor(page: Page) {
  18 |     this.loginForm = page.locator('form').filter({
  19 |       has: page.getByRole('button', { name: 'Login', exact: true }),
  20 |     });
  21 |     this.loginHeading = page.getByRole('heading', {
  22 |       name: 'Login to your account',
  23 |       exact: true,
  24 |     });
  25 |     this.emailInput = this.loginForm.getByPlaceholder('Email Address');
  26 |     this.passwordInput = this.loginForm.getByPlaceholder('Password');
  27 |     this.loginButton = this.loginForm.getByRole('button', {
  28 |       name: 'Login',
  29 |       exact: true,
  30 |     });
  31 |     this.loginError = page.getByText(
  32 |       'Your email or password is incorrect!',
  33 |       { exact: true },
  34 |     );
  35 |     this.signupForm = page.locator('form').filter({
  36 |       has: page.getByRole('button', { name: 'Signup', exact: true }),
  37 |     });
  38 |     this.signupHeading = page.getByRole('heading', {
  39 |       name: 'New User Signup!',
  40 |       exact: true,
  41 |     });
  42 |     this.signupNameInput = this.signupForm.getByPlaceholder('Name');
  43 |     this.signupEmailInput = this.signupForm.getByPlaceholder('Email Address');
  44 |     this.signupButton = this.signupForm.getByRole('button', {
  45 |       name: 'Signup',
  46 |       exact: true,
  47 |     });
  48 |     this.signupError = page.getByText('Email Address already exist!', {
  49 |       exact: true,
  50 |     });
  51 |   }
  52 | 
  53 |   async waitUntilVisible(): Promise<void> {
  54 |     await this.loginHeading.waitFor({ state: 'visible' });
  55 |   }
  56 | 
  57 |   async submitCredentials(email: string, password: string): Promise<void> {
  58 |     await this.emailInput.fill(email);
  59 |     await this.passwordInput.fill(password);
> 60 |     await this.loginButton.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  61 |   }
  62 | 
  63 |   async beginSignup(name: string, email: string): Promise<void> {
  64 |     await this.signupHeading.waitFor({ state: 'visible' });
  65 |     await this.signupNameInput.fill(name);
  66 |     await this.signupEmailInput.fill(email);
  67 |     await this.signupButton.click();
  68 |   }
  69 | 
  70 |   get loginErrorMessage(): Locator {
  71 |     return this.loginError;
  72 |   }
  73 | 
  74 |   get signupErrorMessage(): Locator {
  75 |     return this.signupError;
  76 |   }
  77 | }
```