import { test as base } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route("**/*", (route) => {
      const url = route.request().url();

      if (
        url.includes("ads") ||
        url.includes("doubleclick") ||
        url.includes("googlesyndication")
      ) {
        return route.abort();
      }

      route.continue();
    });

    page.on("load", async () => {
      const closeBtn = page.locator(
        'button:has-text("Close"), button:has-text("Cerrar")',
      );

      if (await closeBtn.isVisible().catch(() => false)) {
        await closeBtn.click();
      }
    });

    await use(page);
  },
});
