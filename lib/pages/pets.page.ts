import { BasePage } from "../base.page";
import { NavigationComponent } from "../components/navigation.component";
import { PetCardComponent } from "../components/pet-card.component";

export class PetsPage extends BasePage {
  readonly href = "/pets";
  readonly componentNavigation = new NavigationComponent(
    this.page.getByRole("navigation")
  );

  readonly headingPets = this.page.getByRole("heading", { name: "Pets" });
  readonly buttonNewPet = this.page.getByRole("link", { name: "New pet" });

  getPetCardComponent(index: number): PetCardComponent {
    return new PetCardComponent(
      this.page.locator("div.border.bg-gray-100").nth(index)
    );
  }

  getPetCardComponentByName(name: string): PetCardComponent {
    return new PetCardComponent(
      this.page.locator("div.border.bg-gray-100").filter({ hasText: name })
    );
  }
}
