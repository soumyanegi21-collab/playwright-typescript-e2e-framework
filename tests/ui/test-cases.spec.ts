import { expect, test } from '../../fixtures/uiTest';
import { PAGE_TITLES } from '../../constants/application';
import testData from '../../test-data/testCases.json';
import { HomePage } from '../../pages/HomePage';
import { TestCasesPage } from '../../pages/TestCasesPage';

test(testData.testCase7.title, async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const testCasesPage = new TestCasesPage(page);

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openTestCases();
  await testCasesPage.waitUntilVisible();
  await testCasesPage.openTestCase7Details();
  await testCasesPage.waitUntilTestCase7DetailsVisible();

  // Assert
  const expectedPath = testData.testCase7.expectedPath;
  await expect(page).toHaveURL(new RegExp(`${expectedPath}(?:#.*)?$`));
  await expect(page).toHaveTitle(PAGE_TITLES.testCases);
  await expect(testCasesPage.heading).toBeVisible();

  for (const scenario of testData.catalog) {
    await expect(testCasesPage.getTestCaseLink(scenario.title)).toBeVisible();
  }

  const actualSteps = await testCasesPage.getTestCase7Steps();
  const expectedSteps = testData.testCase7.requiredSteps;
  expect(actualSteps).toHaveLength(expectedSteps.length);
  expectedSteps.forEach((expectedStep, index) => {
    expect(actualSteps[index]).toContain(expectedStep);
  });
});