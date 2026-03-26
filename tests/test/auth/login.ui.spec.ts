import { test, expect } from "../../../fixtures/userFixture";

test("user can login successfully @e2e", async ({ page, user }) => {
  await page.goto("/login");
  await page.fill('input[data-qa="login-email"]', user.email);
  await page.fill('input[data-qa="login-password"]', user.password);
  await page.click('button[data-qa="login-button"]');
  await expect(page.locator("text=Logged in as " + user.name)).toBeVisible();
});
