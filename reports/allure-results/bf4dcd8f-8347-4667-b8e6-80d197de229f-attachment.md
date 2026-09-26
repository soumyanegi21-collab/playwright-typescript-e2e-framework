# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shopping-cart.spec.ts >> Test Cases 13 and 17: set cart quantity and remove the product
- Location: tests\ui\shopping-cart.spec.ts:8:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#cartModal').getByRole('link', { name: /View Cart$/ }) to be visible

```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - banner [ref=f2e2]:
    - generic [ref=f2e5]:
      - link [ref=f2e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f2e9]
      - list [ref=f2e12]:
        - listitem [ref=f2e13]:
          - link " Home" [ref=f2e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f2e15]: 
            - text: Home
        - listitem [ref=f2e16]:
          - link " Products" [ref=f2e17] [cursor=pointer]:
            - /url: /products
        - listitem [ref=f2e18]:
          - link " Cart" [ref=f2e19] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f2e20]: 
            - text: Cart
        - listitem [ref=f2e21]:
          - link " Signup / Login" [ref=f2e22] [cursor=pointer]:
            - /url: /login
            - generic [ref=f2e23]: 
            - text: Signup / Login
        - listitem [ref=f2e24]:
          - link " Test Cases" [ref=f2e25] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f2e26]: 
            - text: Test Cases
        - listitem [ref=f2e27]:
          - link " API Testing" [ref=f2e28] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f2e29]: 
            - text: API Testing
        - listitem [ref=f2e30]:
          - link " Video Tutorials" [ref=f2e31] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f2e32]: 
            - text: Video Tutorials
        - listitem [ref=f2e33]:
          - link " Contact us" [ref=f2e34] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f2e35]: 
            - text: Contact us
  - generic [ref=f2e38]:
    - generic [ref=f2e40]:
      - heading "Category" [level=2] [ref=f2e41]
      - generic [ref=f2e42]:
        - heading [level=4] [ref=f2e45]:
          - link " Women" [ref=f2e46] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f2e47]: 
            - text: Women
        - heading [level=4] [ref=f2e51]:
          - link " Men" [ref=f2e52] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f2e53]: 
            - text: Men
        - heading [level=4] [ref=f2e57]:
          - link " Kids" [ref=f2e58] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f2e59]: 
            - text: Kids
      - generic [ref=f2e61]:
        - heading "Brands" [level=2] [ref=f2e62]
        - list [ref=f2e64]:
          - listitem [ref=f2e65]:
            - link "(6) Polo" [ref=f2e66] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f2e67]: (6)
              - text: Polo
          - listitem [ref=f2e68]:
            - link "(5) H&M" [ref=f2e69] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f2e70]: (5)
              - text: H&M
          - listitem [ref=f2e71]:
            - link "(5) Madame" [ref=f2e72] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f2e73]: (5)
              - text: Madame
          - listitem [ref=f2e74]:
            - link "(3) Mast & Harbour" [ref=f2e75] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f2e76]: (3)
              - text: Mast & Harbour
          - listitem [ref=f2e77]:
            - link "(4) Babyhug" [ref=f2e78] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f2e79]: (4)
              - text: Babyhug
          - listitem [ref=f2e80]:
            - link "(3) Allen Solly Junior" [ref=f2e81] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f2e82]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f2e83]:
            - link "(3) Kookie Kids" [ref=f2e84] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f2e85]: (3)
              - text: Kookie Kids
          - listitem [ref=f2e86]:
            - link "(5) Biba" [ref=f2e87] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f2e88]: (5)
              - text: Biba
    - generic [ref=f2e89]:
      - generic [ref=f2e90]:
        - img "ecommerce website products" [ref=f2e93]
        - generic [ref=f2e95]:
          - img "ecommerce website products" [ref=f2e96]
          - heading "Blue Top" [level=2] [ref=f2e97]
          - paragraph [ref=f2e98]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=f2e99]
          - generic [ref=f2e100]:
            - generic [ref=f2e101]: Rs. 500
            - generic [ref=f2e102]: "Quantity:"
            - spinbutton [ref=f2e103]: "4"
            - button " Add to cart" [active] [ref=f2e104] [cursor=pointer]:
              - generic [ref=f2e105]: 
              - text: Add to cart
          - paragraph [ref=f2e106]: "Availability: In Stock"
          - paragraph [ref=f2e107]: "Condition: New"
          - paragraph [ref=f2e108]: "Brand: Polo"
      - generic [ref=f2e109]:
        - list [ref=f2e111]:
          - listitem [ref=f2e112]:
            - link "Write Your Review" [ref=f2e113]:
              - /url: "#reviews"
        - generic [ref=f2e115]:
          - generic [ref=f2e116]:
            - textbox "Your Name" [ref=f2e117]
            - textbox "Email Address" [ref=f2e118]
          - textbox "Add Review Here!" [ref=f2e119]
          - button "Submit" [ref=f2e120] [cursor=pointer]
  - contentinfo [ref=f2e121]:
    - generic [ref=f2e126]:
      - heading "Subscription" [level=2] [ref=f2e127]
      - generic [ref=f2e128]:
        - textbox "Your email address" [ref=f2e129]
        - button "" [ref=f2e130] [cursor=pointer]
        - paragraph [ref=f2e132]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f2e136]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import type { Locator, Page } from '@playwright/test';
  2  | 
  3  | export class ProductDetailsPage {
  4  |   private readonly page: Page;
  5  |   private readonly productHeading: Locator;
  6  |   private readonly quantityInput: Locator;
  7  |   private readonly addToCartButton: Locator;
  8  |   private readonly cartModal: Locator;
  9  |   private readonly viewCartLink: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.productHeading = page.getByRole('heading', {
  14 |       name: 'Blue Top',
  15 |       exact: true,
  16 |     });
  17 |     this.quantityInput = page.getByRole('spinbutton');
  18 |     this.addToCartButton = page.getByRole('button', {
  19 |       name: /Add to cart$/,
  20 |     });
  21 |     this.cartModal = page.locator('#cartModal');
  22 |     this.viewCartLink = this.cartModal.getByRole('link', {
  23 |       name: /View Cart$/,
  24 |     });
  25 |   }
  26 | 
  27 |   async waitUntilVisible(): Promise<void> {
  28 |     await this.productHeading.waitFor({ state: 'visible' });
  29 |   }
  30 | 
  31 |   async addToCart(quantity: number): Promise<void> {
  32 |     await this.quantityInput.fill(String(quantity));
  33 |     await this.addToCartButton.click();
> 34 |     await this.viewCartLink.waitFor({ state: 'visible' });
     |                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  35 |   }
  36 | 
  37 |   async openCart(): Promise<void> {
  38 |     await this.viewCartLink.click();
  39 |   }
  40 | }
```