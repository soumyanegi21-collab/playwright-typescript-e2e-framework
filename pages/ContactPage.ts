import type { Locator, Page } from '@playwright/test';

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactPage {
  private readonly page: Page;
  private readonly heading: Locator;
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly subjectInput: Locator;
  private readonly messageInput: Locator;
  private readonly fileInput: Locator;
  private readonly submitButton: Locator;
  private readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: /Get In Touch/i });
    this.nameInput = page.getByRole('textbox', { name: 'Name', exact: true });
    this.emailInput = page.getByRole('textbox', { name: 'Email', exact: true });
    this.subjectInput = page.getByRole('textbox', {
      name: 'Subject',
      exact: true,
    });
    this.messageInput = page.getByRole('textbox', {
      name: 'Your Message Here',
      exact: true,
    });
    this.fileInput = page.locator('input[type="file"]');
    this.submitButton = page.getByRole('button', {
      name: 'Submit',
      exact: true,
    });
    this.successMessage = page.locator('#contact-page').getByText(
      'Success! Your details have been submitted successfully.',
      { exact: true },
    );
  }

  async waitUntilVisible(): Promise<void> {
    await this.heading.waitFor({ state: 'visible' });
  }

  async fillForm(data: ContactFormData): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
  }

  async attachFile(name: string, mimeType: string, content: Buffer): Promise<void> {
    await this.fileInput.setInputFiles({ name, mimeType, buffer: content });
  }

  async submitAndAcceptConfirmation(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.submitButton.click();
  }

  get nameField(): Locator {
    return this.nameInput;
  }

  get submissionSuccess(): Locator {
    return this.successMessage;
  }
}