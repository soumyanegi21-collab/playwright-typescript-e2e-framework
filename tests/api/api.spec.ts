import { randomUUID } from 'node:crypto';
import { expect, test } from '@playwright/test';
import { ApiHelper } from '../../helpers/ApiHelper';
import apiData from '../../test-data/api.json';

test('API: get products list', async ({ request }) => {
  // Arrange
  const api = new ApiHelper(request);

  // Act
  const response = await api.get('/api/productsList');
  const body = await response.json();

  // Assert
  expect(response.ok()).toBeTruthy();
  expect(body.responseCode).toBe(200);
  expect(body.products.length).toBeGreaterThan(0);
});

test('API: search products', async ({ request }) => {
  // Arrange
  const api = new ApiHelper(request);

  // Act
  const response = await api.postForm('/api/searchProduct', {
    search_product: apiData.search.term,
  });
  const body = await response.json();

  // Assert
  expect(response.ok()).toBeTruthy();
  expect(body.responseCode).toBe(200);
  expect(body.products.length).toBeGreaterThan(0);
  expect(
    body.products.some((product: { name: string }) =>
      product.name.toLowerCase().includes(apiData.search.term),
    ),
  ).toBeTruthy();
});

test('API: reject login for an unknown user', async ({ request }) => {
  // Arrange
  const api = new ApiHelper(request);

  // Act
  const response = await api.postForm('/api/verifyLogin', {
    email: apiData.invalidLogin.email,
    password: apiData.invalidLogin.password,
  });
  const body = await response.json();

  // Assert
  expect(body.responseCode).toBe(404);
  expect(body.message).toBe('User not found!');
});

test('API: create and delete a user account', async ({ request }) => {
  // Arrange
  const api = new ApiHelper(request);
  const account = apiData.newAccount;
  const email = `${account.emailPrefix}-${randomUUID()}@${account.emailDomain}`;
  const accountForm = {
    ...account,
    email,
  };

  // Act
  const createResponse = await api.postForm('/api/createAccount', accountForm);
  const createBody = await createResponse.json();

  // Assert creation, then delete the disposable test user.
  expect(createBody.responseCode).toBe(201);
  expect(createBody.message).toBe('User created!');

  const deleteResponse = await api.deleteForm('/api/deleteAccount', {
    email,
    password: account.password,
  });
  const deleteBody = await deleteResponse.json();
  expect(deleteBody.responseCode).toBe(200);
  expect(deleteBody.message).toBe('Account deleted!');
});