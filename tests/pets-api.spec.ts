import { expect } from "@playwright/test";
import { test } from "../lib/base.test";

test.use({ baseURL: "http://localhost:8080" });

test.describe("Pets API @pets-api", () => {
  test("should get pets @api", async ({ authService, petsService }) => {
    const authResponse = await authService.authenticateWithPassword(
      "franske@example.com",
      "test"
    );
    const authData = await authResponse.json();
    const token = authData.token;

    const petsResponse = await petsService.getAll(token);
    const petsData = await petsResponse.json();

    await expect(petsResponse).toBeOK();
    expect(petsData).toEqual({
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
        }),
      ]),
      page: 1,
      perPage: 30,
      totalItems: expect.any(Number),
      totalPages: expect.any(Number),
    });
  });
});
