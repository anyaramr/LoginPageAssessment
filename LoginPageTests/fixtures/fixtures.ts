import { test as base } from "@playwright/test";
export { expect } from "@playwright/test";

//Pages
import { LoginPage } from "../pages/login-page";
import { SecureAreaPage } from "../pages/secure-area-page";
import { Utils } from "../utils/utils";
//Data Files
export { Notifications } from "../data-files/notifications";
export { Env } from "../utils/env";


type MyFixtures = {
  loginPage: LoginPage;
  secureAreaPage: SecureAreaPage;
  utils: Utils;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  secureAreaPage: async ({ page }, use) => {
    const secureAreaPage = new SecureAreaPage(page);
    await use(secureAreaPage);
  },
  utils: async ({ page }, use) => {
    const utils = new Utils(page);
    await use(utils);
  }
});