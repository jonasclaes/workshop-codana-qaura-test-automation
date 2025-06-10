import { BasePage } from "../base.page";
import { NavigationComponent } from "../components/navigation.component";

export class NewPetPage extends BasePage {
  readonly href = "/pets/new";
  readonly componentNavigation = new NavigationComponent(
    this.page.getByRole("navigation")
  );

  readonly headingNewPet = this.page.getByRole("heading", { name: "New Pet" });
  readonly buttonBack = this.page.getByRole("button", { name: "Back" });
  readonly inputName = this.page.getByRole("textbox", { name: "Name" });
  readonly selectCategory = this.page.getByRole("combobox", {
    name: "Category",
  });
  readonly buttonCreate = this.page.getByRole("button", { name: "Create" });
}
