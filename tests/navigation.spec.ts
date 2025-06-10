import { test, expect } from "@playwright/test";

test.describe("Navigation @navigation", () => {
  test("should create a pet", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: "Pets" }).waitFor();

    await expect(page).toHaveScreenshot({
      fullPage: true,
      mask: [page.locator("div.border.bg-gray-100")],
    });

    await expect(page.getByRole("link", { name: "Login" })).toHaveScreenshot();

    await page.getByRole("link", { name: "Login" }).click();
    await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();

    await page.getByRole("link", { name: "Register" }).click();
    await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();

    await page.getByRole("link", { name: "Pets" }).click();
    await expect(page.getByRole("heading", { name: "Pets" })).toBeVisible();

    await page.getByRole("link", { name: "Login" }).click();
    await page
      .getByRole("textbox", { name: "Email" })
      .fill("franske@example.com");
    await page.getByRole("textbox", { name: "Password" }).fill("test");
    await page.getByRole("button", { name: "Login" }).click();

    // Logged in as a user

    await page.getByRole("link", { name: "New pet" }).click();
    await expect(page.getByRole("heading", { name: "New pet" })).toBeVisible();

    await page.getByRole("link", { name: "My orders" }).click();
    await expect(
      page.getByRole("heading", { name: "My orders" })
    ).toBeVisible();

    await page.getByRole("link", { name: "Logout" }).click();
    await expect(page.getByRole("heading", { name: "Pets" })).toBeVisible();
  });
});
