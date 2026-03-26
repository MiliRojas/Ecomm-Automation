import "dotenv/config";
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",

  retries: 1,

  use: {
    baseURL: process.env.BASE_URL || "https://automationexercise.com/",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "ui",
      grep: /\.ui\./,
    },
    {
      name: "api",
      grep: /\.api\./,
    },
  ],

  reporter: [["html"], ["list"]],
});
