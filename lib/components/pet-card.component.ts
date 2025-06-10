import { BaseComponent } from "../base.component";

export class PetCardComponent extends BaseComponent {
  readonly imagePet = this.root.getByRole("img");
  readonly paragraphPetName = this.root.getByRole("paragraph").nth(0);
  readonly paragraphPetCategory = this.root.getByRole("paragraph").nth(1);
  readonly paragraphPetStatus = this.root.getByRole("paragraph").nth(2);
  readonly buttonAddToCart = this.root.getByRole("button", {
    name: "Add to cart",
  });
}
