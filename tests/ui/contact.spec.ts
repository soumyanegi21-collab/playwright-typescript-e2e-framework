import { expect, test } from '../../fixtures/uiTest';
import { ContactPage } from '../../pages/ContactPage';
import { HomePage } from '../../pages/HomePage';
import contactData from '../../test-data/contact.json';

test('Test Case 6: submit the Contact Us form', async ({ page }) => {
  // Arrange
  const homePage = new HomePage(page);
  const contactPage = new ContactPage(page);
  const formData = contactData.form;
  const upload = contactData.upload;

  // Act
  await homePage.open();
  await homePage.waitUntilVisible();
  await homePage.openContactUs();
  await contactPage.waitUntilVisible();
  await contactPage.fillForm(formData);
  await contactPage.attachFile(
    upload.fileName,
    upload.mimeType,
    Buffer.from(upload.content),
  );
  await contactPage.submitAndAcceptConfirmation();
  await contactPage.waitUntilVisible();

  // Assert
  await expect(page).toHaveURL(/\/contact_us$/);
  await expect(contactPage.submissionSuccess).toHaveText(
    contactData.expectedSuccess,
  );
});