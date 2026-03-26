import { Page } from "@playwright/test";

export class SignupPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async startSignup(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  async fillForm(user: any) {
    await this.page.getByLabel('Mrs.').check();
    await this.page.fill('#password', user.password);

    await this.page.locator('[data-qa="days"]').selectOption('27');
    await this.page.locator('[data-qa="months"]').selectOption('11');
    await this.page.locator('[data-qa="years"]').selectOption('1990');

    await this.page.fill('[data-qa="first_name"]', user.firstName);
    await this.page.fill('[data-qa="last_name"]', user.lastName);
    await this.page.fill('[data-qa="company"]', user.company);
    await this.page.fill('[data-qa="address"]', user.address);

    await this.page.locator('[data-qa="country"]').selectOption(user.country);

    await this.page.fill('[data-qa="state"]', user.state);
    await this.page.fill('[data-qa="city"]', user.city);
    await this.page.fill('[data-qa="zipcode"]', user.zipCode);
    await this.page.fill('[data-qa="mobile_number"]', user.mobileNumber);
  }

  async submit() {
    await this.page.click('button[data-qa="create-account"]');
  }

  async validateAccountCreated() {
    await this.page.waitForURL('**/account_created');
    await this.page.locator('[data-qa="account-created"]').waitFor();
  }
}