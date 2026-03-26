# 🛒 E-commerce Automation Suite

Complete automation framework for UI and API testing of an e-commerce application using Playwright and TypeScript.

---

## 🚀 Tech Stack

* 🎭 Playwright
* 🟦 TypeScript
* 🔗 Axios (API testing)
* 🌱 Dotenv (environment variables)
* 🧪 Playwright Test Runner
* 🧩 Page Object Model (POM)

---

## 📌 Overview

This project is a full automation suite designed to validate both UI and API flows of an e-commerce platform.

It includes:

* End-to-end purchase flow
* Authentication testing (UI + API)
* API client abstraction
* Test data management with fixtures
* Scalable architecture using Page Object Model

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ecomm-automation.git
cd ecomm-automation
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env` file based on `.env.example`:

```env
BASE_URL=https://automationexercise.com/
```

---

## ▶️ Running Tests

Run all tests:

```bash
npm run test
```

Run UI tests only:

```bash
npm run test:ui
```

Run API tests only:

```bash
npm run test:api
```

Run in debug mode:

```bash
npm run test:debug
```

Open HTML report:

```bash
npm run report
```

---

## 📁 Project Structure

```
├── tests/
│   ├── test/
│   │   ├── auth/
│   │   └── shopping/
├── pages/                # Page Object Model classes
├── api/                  # API clients and services
├── fixtures/             # Test fixtures (user, data setup)
├── helpers/              # Reusable logic
├── utils/                # Data factories and utilities
├── .github/workflows/    # CI configuration (Playwright)
├── playwright.config.ts
```

---

## 🧪 Example Test

```ts
test("user can complete purchase flow", async ({ page, user }) => {
  await page.goto("/login");
  await page.fill('input[data-qa="login-email"]', user.email);
  await page.fill('input[data-qa="login-password"]', user.password);
  await page.click('button[data-qa="login-button"]');

  await expect(page.locator("text=Logged in as " + user.name)).toBeVisible();

  // Product flow
  await page.click('a[href="/products"]');

  // Assertions and flow continue...
});
```

---

## 🔄 CI Integration

This project includes a GitHub Actions workflow that runs Playwright tests automatically.

Location:

```
.github/workflows/playwright.yml
```

---

## 📊 Reporting

* HTML reports generated automatically
* Screenshots and videos captured on failure

---

## 👩‍💻 Author

**Milagros Rojas**
QA Automation Engineer
