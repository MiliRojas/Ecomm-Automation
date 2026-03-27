import { Page } from "@playwright/test";

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart() {
    await this.page.click(".add-to-cart");
  }

  async goToCart() {
    await this.page
      .locator("#cartModal a[href='/view_cart']")
      .first()
      .click({ force: true });
  }
}
