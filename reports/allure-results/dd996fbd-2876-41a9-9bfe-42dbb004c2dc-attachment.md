# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\product-details.spec.ts >> Test Cases 8 and 13: inspect a product and set its quantity
- Location: tests\ui\product-details.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Polo', exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Polo', exact: true }) with timeout 10000ms
  - waiting for getByRole('link', { name: 'Polo', exact: true })

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
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- img "ecommerce website products"
- img "ecommerce website products"
- heading "Blue Top" [level=2]
- paragraph: "Category: Women > Tops"
- img "ecommerce website products"
- text: "Rs. 500 Quantity:"
- spinbutton: "4"
- button " Add to cart"
- paragraph: "Availability: In Stock"
- paragraph: "Condition: New"
- paragraph: "Brand: Polo"
- list:
  - listitem:
    - link "Write Your Review":
      - /url: "#reviews"
- textbox "Your Name"
- textbox "Email Address"
- textbox "Add Review Here!"
- button "Submit"
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
  2  | import { HomePage } from '../../pages/HomePage';
  3  | import { ProductDetailsPage } from '../../pages/ProductDetailsPage';
  4  | import { ProductPage } from '../../pages/ProductPage';
  5  | import productsData from '../../test-data/products.json';
  6  | 
  7  | test('Test Cases 8 and 13: inspect a product and set its quantity', async ({
  8  |   page,
  9  | }) => {
  10 |   // Arrange
  11 |   const homePage = new HomePage(page);
  12 |   const productPage = new ProductPage(page);
  13 |   const productDetailsPage = new ProductDetailsPage(page);
  14 |   const productName = productsData.cartProduct.name;
  15 |   const quantity = productsData.cartProduct.quantity;
  16 | 
  17 |   // Act
  18 |   await homePage.open();
  19 |   await homePage.waitUntilVisible();
  20 |   await homePage.openProducts();
  21 |   await productPage.waitUntilVisible();
  22 |   await productPage.openProductDetails(productName);
  23 |   await productDetailsPage.waitUntilVisible();
  24 |   await productDetailsPage.setQuantity(quantity);
  25 | 
  26 |   // Assert product details and quantity entry are available as documented.
  27 |   await expect(productDetailsPage.quantity).toHaveValue(String(quantity));
  28 |   await expect(productDetailsPage.addToCart).toBeVisible();
  29 |   await expect(productDetailsPage.productAvailability).toBeVisible();
  30 |   await expect(productDetailsPage.productCondition).toBeVisible();
> 31 |   await expect(productDetailsPage.productBrand).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  32 | });
```