import { expect, test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route(
      /google|doubleclick|googlesyndication|googletagservices|adservice|adsbygoogle/i,
      (route) => route.abort(),
    );
    await use(page);
  },
});

export { expect };