import { expect } from "@playwright/test";
import { test } from "../lib/base.test";
import { loginFlow } from "../lib/flows/login.flow";

test.describe("Pets @pets", () => {
  test("should create a pet", async ({
    page,
    petsPage,
    newPetPage,
    loginPage,
  }) => {
    const petName = `Fritz ${new Date().toISOString()}`;

    await test.step("Navigate to pets page", async () => {
      await page.goto(petsPage.href);
      await petsPage.headingPets.waitFor();
    });

    await test.step("Login as admin", async () => {
      await petsPage.componentNavigation.linkLogin.click();

      await loginFlow(loginPage, "franske@example.com", "test");
    });

    await test.step("Create a new pet", async () => {
      await petsPage.buttonNewPet.click();

      await newPetPage.inputName.fill(petName);
      await newPetPage.selectCategory.selectOption("Dog");

      await page.pause();

      await newPetPage.buttonCreate.click();

      await expect(petsPage.headingPets).toBeVisible();

      const petCard = petsPage.getPetCardComponent(0);
      await expect(petCard.paragraphPetName).toHaveText(petName);
    });
  });
});
