import { Page } from "@playwright/test";
import { SignupPage } from "../pages/SignupPage";

export const signupUser = async (page: Page, user: any) => {
  const signupPage = new SignupPage(page);

  await signupPage.goto();
  await signupPage.startSignup(user.name, user.email);
  await signupPage.fillForm(user);
  await signupPage.submit();
  await signupPage.validateAccountCreated();
};