import { test as base } from "@playwright/test";
import { NewPetPage } from "./pages/new-pet.page";
import { PetsService } from "./services/pets.service";
import { PetsPage } from "./pages/pets.page";
import { LoginPage } from "./pages/login.page";
import { AuthService } from "./services/auth.service";

type TestFixtures = {
  petsPage: PetsPage;
  newPetPage: NewPetPage;
  loginPage: LoginPage;

  authService: AuthService;
  petsService: PetsService;
};

export const test = base.extend<TestFixtures>({
  petsPage: async ({ page }, use) => {
    await use(new PetsPage(page));
  },
  newPetPage: async ({ page }, use) => {
    await use(new NewPetPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  authService: async ({ request }, use) => {
    await use(new AuthService(request));
  },
  petsService: async ({ request }, use) => {
    await use(new PetsService(request));
  },
});
