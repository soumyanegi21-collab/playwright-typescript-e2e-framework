# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\shopping-cart.spec.ts >> Test Cases 12 and 17: add and remove a product from the cart
- Location: tests\ui\shopping-cart.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#cart_info_table tbody tr').filter({ hasText: 'Blue Top' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('#cart_info_table tbody tr').filter({ hasText: 'Blue Top' }) with timeout 10000ms
  - waiting for locator('#cart_info_table tbody tr').filter({ hasText: 'Blue Top' })

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
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- paragraph:
  - text: Cart is empty! Click
  - link "here":
    - /url: /products
  - text: to buy products.
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
  2  | import { CartPage } from '../../pages/CartPage';
  3  | import { HomePage } from '../../pages/HomePage';
  4  | import { ProductPage } from '../../pages/ProductPage';
  5  | import productsData from '../../test-data/products.json';
  6  | 
  7  | test('Test Cases 12 and 17: add and remove a product from the cart', async ({
  8  |   page,
  9  | }) => {
  10 |   // Arrange
  11 |   const homePage = new HomePage(page);
  12 |   const productPage = new ProductPage(page);
  13 |   const cartPage = new CartPage(page);
  14 |   const productName = productsData.cartProduct.name;
  15 | 
  16 |   // Act
  17 |   await homePage.open();
  18 |   await homePage.waitUntilVisible();
  19 |   await homePage.openProducts();
  20 |   await productPage.waitUntilVisible();
  21 |   await productPage.addToCart(productName);
  22 |   await cartPage.open();
  23 |   await cartPage.waitUntilVisible();
  24 | 
  25 |   // Assert product was added, then remove the same product.
> 26 |   await expect(cartPage.productRow(productName)).toBeVisible();
     |                                                  ^ Error: expect(locator).toBeVisible() failed
  27 |   await cartPage.removeProduct(productName);
  28 |   await expect(cartPage.productRow(productName)).toHaveCount(0);
  29 | });
```