# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\contact.spec.ts >> Test Case 6: submit the Contact Us form
- Location: tests\ui\contact.spec.ts:6:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('#contact-page').getByText('Success! Your details have been submitted successfully.', { exact: true })
Expected: "Success! Your details have been submitted successfully."
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('#contact-page').getByText('Success! Your details have been submitted successfully.', { exact: true }) with timeout 10000ms
  - waiting for locator('#contact-page').getByText('Success! Your details have been submitted successfully.', { exact: true })

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Contact Us" [level=2]:
  - text: Contact
  - strong: Us
- text: "Note: Below contact form is for testing purpose."
- heading "Get In Touch" [level=2]
- textbox "Name"
- textbox "Email"
- textbox "Subject"
- textbox "Your Message Here"
- button "Choose File"
- button "Submit"
- heading "Feedback For Us" [level=2]
- paragraph: We really appreciate your response to our website.
- paragraph:
  - text: Kindly share your feedback with us at
  - link "feedback@automationexercise.com":
    - /url: mailto:feedback@automationexercise.com
  - text: .
- paragraph: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
- paragraph: Thank you
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import { expect, test } from '../../fixtures/uiTest';
  2  | import { ContactPage } from '../../pages/ContactPage';
  3  | import { HomePage } from '../../pages/HomePage';
  4  | import contactData from '../../test-data/contact.json';
  5  | 
  6  | test('Test Case 6: submit the Contact Us form', async ({ page }) => {
  7  |   // Arrange
  8  |   const homePage = new HomePage(page);
  9  |   const contactPage = new ContactPage(page);
  10 |   const formData = contactData.form;
  11 |   const upload = contactData.upload;
  12 | 
  13 |   // Act
  14 |   await homePage.open();
  15 |   await homePage.waitUntilVisible();
  16 |   await homePage.openContactUs();
  17 |   await contactPage.waitUntilVisible();
  18 |   await contactPage.fillForm(formData);
  19 |   await contactPage.attachFile(
  20 |     upload.fileName,
  21 |     upload.mimeType,
  22 |     Buffer.from(upload.content),
  23 |   );
  24 |   await contactPage.submitAndAcceptConfirmation();
  25 |   await contactPage.waitUntilVisible();
  26 | 
  27 |   // Assert
  28 |   await expect(page).toHaveURL(/\/contact_us$/);
> 29 |   await expect(contactPage.submissionSuccess).toHaveText(
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  30 |     contactData.expectedSuccess,
  31 |   );
  32 | });
```