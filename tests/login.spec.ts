import { test, expect } from "@playwright/test";

test.describe("Authentication @authentication", () => {
  test("should log in with valid credentials", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: "Pets" }).waitFor();

    await page.getByRole("link", { name: "Login" }).click();
    await page
      .getByRole("textbox", { name: "Email" })
      .fill("joske@example.com");
    await page.getByRole("textbox", { name: "Password" }).fill("test");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("heading", { name: "Pets" })).toBeVisible();
  });

  test("should log in with valid admin credentials", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("heading", { name: "Pets" }).waitFor();

    await page.getByRole("link", { name: "Login" }).click();
    await page
      .getByRole("textbox", { name: "Email" })
      .fill("franske@example.com");
    await page.getByRole("textbox", { name: "Password" }).fill("test");
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("heading", { name: "Pets" })).toBeVisible();
  });
});
