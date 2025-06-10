import { BasePage } from "../base.page";

export class LoginPage extends BasePage {
  readonly href = "/auth/login";

  readonly headingLogin = this.page.getByRole("heading", { name: "Login" });
  readonly inputEmail = this.page.getByRole("textbox", { name: "Email" });
  readonly inputPassword = this.page.getByRole("textbox", { name: "Password" });
  readonly buttonLogin = this.page.getByRole("button", { name: "Login" });
  readonly buttonRegister = this.page.getByRole("link", { name: "Register" });
}
