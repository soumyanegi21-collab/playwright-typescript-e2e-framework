# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\contact.spec.ts >> Test Case 6: submit the Contact Us form
- Location: tests\ui\contact.spec.ts:6:5

# Error details

```
TimeoutError: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - banner [ref=f1e2]:
    - generic [ref=f1e5]:
      - link [ref=f1e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f1e9]
      - list [ref=f1e12]:
        - listitem [ref=f1e13]:
          - link " Home" [ref=f1e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f1e15]: 
            - text: Home
        - listitem [ref=f1e16]:
          - link " Products" [ref=f1e17] [cursor=pointer]:
            - /url: /products
        - listitem [ref=f1e18]:
          - link " Cart" [ref=f1e19] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f1e20]: 
            - text: Cart
        - listitem [ref=f1e21]:
          - link " Signup / Login" [ref=f1e22] [cursor=pointer]:
            - /url: /login
            - generic [ref=f1e23]: 
            - text: Signup / Login
        - listitem [ref=f1e24]:
          - link " Test Cases" [ref=f1e25] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f1e26]: 
            - text: Test Cases
        - listitem [ref=f1e27]:
          - link " API Testing" [ref=f1e28] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f1e29]: 
            - text: API Testing
        - listitem [ref=f1e30]:
          - link " Video Tutorials" [ref=f1e31] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f1e32]: 
            - text: Video Tutorials
        - listitem [ref=f1e33]:
          - link " Contact us" [ref=f1e34] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f1e35]: 
            - text: Contact us
  - generic [ref=f1e36]:
    - heading [level=2] [ref=f1e40]:
      - text: Contact
      - strong [ref=f1e41]: Us
    - generic [ref=f1e42]:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]: "Note: Below contact form is for testing purpose."
        - heading "Get In Touch" [level=2] [ref=f1e46]
        - generic [ref=f1e47]: Success! Your details have been submitted successfully.
        - link " Home" [ref=f1e49] [cursor=pointer]:
          - /url: /
          - generic [ref=f1e50]:
            - generic [ref=f1e51]: 
            - text: Home
      - generic [ref=f1e53]:
        - heading "Feedback For Us" [level=2] [ref=f1e54]
        - generic [ref=f1e55]:
          - paragraph [ref=f1e56]: We really appreciate your response to our website.
          - paragraph [ref=f1e57]:
            - text: Kindly share your feedback with us at
            - link "feedback@automationexercise.com" [ref=f1e58] [cursor=pointer]:
              - /url: mailto:feedback@automationexercise.com
            - text: .
          - paragraph [ref=f1e59]: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
          - paragraph [ref=f1e60]: Thank you
  - contentinfo [ref=f1e61]:
    - generic [ref=f1e66]:
      - heading "Subscription" [level=2] [ref=f1e67]
      - generic [ref=f1e68]:
        - textbox "Your email address" [ref=f1e69]
        - button "" [ref=f1e70] [cursor=pointer]
        - paragraph [ref=f1e72]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f1e76]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { expect, test } from '../../fixtures/uiTest';
  2  | import { ContactPage } from '../../pages/ContactPage';
  3  | import { HomePage } from '../../pages/HomePage';
  4  | import contactData from '../../test-data/contact.json';
  5  | 
  6  | test('Test Case 6: submit the Contact Us form', async ({ page }) => {
  7  |   page.on('request', (request) => {
  8  |     if (request.url().includes('contact_us')) {
  9  |       console.log(`Contact request ${request.method()} ${request.url()}`);
  10 |     }
  11 |   });
  12 |   page.on('response', (response) => {
  13 |     if (response.url().includes('contact_us')) {
  14 |       console.log(`Contact response ${response.status()} ${response.request().method()} ${response.url()}`);
  15 |     }
  16 |   });
  17 |   // Arrange
  18 |   const homePage = new HomePage(page);
  19 |   const contactPage = new ContactPage(page);
  20 |   const formData = contactData.form;
  21 |   const upload = contactData.upload;
  22 | 
  23 |   // Act
  24 |   await homePage.open();
  25 |   await homePage.waitUntilVisible();
  26 |   await homePage.openContactUs();
  27 |   await contactPage.waitUntilVisible();
  28 |   await contactPage.fillForm(formData);
  29 |   await contactPage.attachFile(
  30 |     upload.fileName,
  31 |     upload.mimeType,
  32 |     Buffer.from(upload.content),
  33 |   );
> 34 |   const submissionResponse = page.waitForResponse(
     |                                   ^ TimeoutError: page.waitForResponse: Timeout 10000ms exceeded while waiting for event "response"
  35 |     (response) =>
  36 |       response.url().endsWith('/contact_us') &&
  37 |       response.request().method() === 'POST',
  38 |   );
  39 | 
  40 |   // Assert the accepted POST and transient success message.
  41 |   const [response] = await Promise.all([
  42 |     submissionResponse,
  43 |     expect(contactPage.submissionSuccess).toHaveText(
  44 |       contactData.expectedSuccess,
  45 |     ),
  46 |     contactPage.submitAndAcceptConfirmation(),
  47 |   ]);
  48 |   expect(response.status()).toBe(200);
  49 | });
```