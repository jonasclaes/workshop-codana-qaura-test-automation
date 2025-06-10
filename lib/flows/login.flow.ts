import { LoginPage } from "../pages/login.page";

export const loginFlow = async (
  loginPage: LoginPage,
  identity: string,
  password: string
) => {
  await loginPage.inputEmail.fill(process.env.ADMIN_USERNAME as string);
  await loginPage.inputPassword.fill(process.env.ADMIN_PASSWORD as string);
  await loginPage.buttonLogin.click();
};
