import { test as base } from "@playwright/test";
import { UserFixture } from "../types/user";
import { generateUser } from "../utils/dataFactory";
import { SignupPage } from "../pages/SignupPage";
import fs from "fs";
import path from "path";

export const test = base.extend<UserFixture>({
  user: async ({ page }, use) => {
    const TEMP_USER_PATH = path.join(__dirname, "../temp-user.json");
    let user;
    if (fs.existsSync(TEMP_USER_PATH)) {
      const fileContent = fs.readFileSync(TEMP_USER_PATH, "utf-8");
      user = JSON.parse(fileContent);
      console.log("✅ Usuario existente reutilizado");
    } else {
      user = generateUser();
      const signupPage = new SignupPage(page);
      await signupPage.goto();
      await signupPage.startSignup(user.name, user.email);
      await signupPage.fillForm(user);
      await signupPage.submit();
      await signupPage.validateAccountCreated();
      fs.writeFileSync(TEMP_USER_PATH, JSON.stringify(user, null, 2));
      console.log("✅ Usuario creado y guardado");
    }
    await use(user);
  },
});
export { expect } from "@playwright/test";
