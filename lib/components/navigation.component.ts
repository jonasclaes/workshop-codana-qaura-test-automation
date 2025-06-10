import { BaseComponent } from "../base.component";

export class NavigationComponent extends BaseComponent {
  readonly linkPets = this.root.getByRole("link", { name: "Pets" });
  readonly linkLogin = this.root.getByRole("link", { name: "Login" });
  readonly linkLogout = this.root.getByRole("link", { name: "Logout" });
  readonly linkMyOrders = this.root.getByRole("link", { name: "My Orders" });
}
