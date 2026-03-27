import { Page } from "@playwright/test";

export class HomePage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.fill("#search_product", product);
    await this.page.click("#submit_search");
  }

  async selectFirstProduct() {
    await this.page.locator(".product-image-wrapper").first().click();
  }

  async viewFirstProduct() {
    await this.page.click('a[href="/product_details/2"]');
  }

  async addToCartFirstProduct() {
    await this.page.locator(".add-to-cart").first().click();
  }
}
