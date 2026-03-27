import { Page } from "@playwright/test";

export class PaymentPage {
  constructor(private page: Page) {}

  async fillPayment(user: { name: string }) {
    await this.page.fill('input[name="name_on_card"]', user.name);
    await this.page.fill(
      'input[name="card_number"]',
      process.env.CARD_NUMBER || "1234123412341234",
    );
    await this.page.fill('input[name="cvc"]', process.env.CVC || "123");
    await this.page.fill(
      'input[name="expiry_month"]',
      process.env.EXPIRY_MONTH || "12",
    );
    await this.page.fill(
      'input[name="expiry_year"]',
      process.env.EXPIRY_YEAR || "2099",
    );
    await this.page.click("#submit");
  }
}
