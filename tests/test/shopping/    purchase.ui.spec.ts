import { test, expect } from "../../../fixtures/userFixture";
import { HomePage } from "../../../pages/HomePage";
import { ProductPage } from "../../../pages/ProductPage";
import { CartPage } from "../../../pages/CartPage";
import { CheckoutPage } from "../../../pages/CheckoutPage";
import { PaymentPage } from "../../../pages/PaymentPage";

test("user can complete purchase flow @e2e @regression", async ({
  page,
  user,
}) => {
  await page.goto("/login");
  await page.fill('input[data-qa="login-email"]', user.email);
  await page.fill('input[data-qa="login-password"]', user.password);
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator("text=Logged in as " + user.name)).toBeVisible();
  await page.click('a[href="/products"]');
  const homePage = new HomePage(page);
  await homePage.searchProduct("Tshirt");

  await expect(page.locator(".product-image-wrapper").first()).toBeVisible();
  await homePage.selectFirstProduct();

  const productPage = new ProductPage(page);
  await productPage.addToCart();

  await expect(page.locator("#cartModal")).toBeVisible();

  await productPage.goToCart();

  const cartPage = new CartPage(page);
  await cartPage.proceedToCheckout();

  await expect(page.locator("text=Address Details")).toBeVisible();

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.placeOrder();

  const paymentPage = new PaymentPage(page);
  await paymentPage.fillPayment(user);
  await expect(page.locator("text=Order Placed")).toBeVisible();
});
