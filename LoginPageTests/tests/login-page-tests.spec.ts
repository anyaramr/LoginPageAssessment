import { expect, Notifications, test, Env } from "../fixtures/fixtures";

test.describe("Login and Logout Tests", async () => {
    let notificationMesageAlert;
    test.beforeEach("Navigation", async ({page}) => {
        await page.goto(Env.baseURL);
    });
    test("Test Case #1: Login Page Validation", async ({loginPage}) => {
        await expect(loginPage.loginPageTitle).toBeVisible();
        await expect(loginPage.loginPageDescription).toBeVisible();
        await expect(loginPage.usernameLabel).toBeVisible();
        await expect(loginPage.usernameInput).toBeVisible();
        await expect(loginPage.passwordLabel).toBeVisible();
        await expect(loginPage.passwordInput).toBeVisible();
        await expect(loginPage.loginButton).toBeVisible();
    });
    test("Test Case #2: Successful Login", async ({loginPage, utils, secureAreaPage}) => {
        await test.step("Complete username and password fields", async () => {
            await expect(loginPage.usernameInput).toBeVisible();
            await loginPage.usernameInput.click();
            await loginPage.usernameInput.fill(Env.validUsername);
            await expect(loginPage.passwordInput).toBeVisible();
            await loginPage.passwordInput.click();
            await loginPage.passwordInput.fill(Env.validPassword);
        });
        await test.step("Click on the Login Button", async () => {
            await loginPage.loginButton.click();
        });
        await test.step("Verify Successful login notification", async () => {
            notificationMesageAlert = await utils.getNotificationAlert(Notifications.successfulLogin);
            await expect(notificationMesageAlert).toBeVisible();
        });
        await test.step("Verify Secure Area Page Title", async () => {
            await expect(secureAreaPage.secureAreaPageTitle).toBeVisible();
        });
    });
    test("Test Case #3: Login with invalid username", async ({loginPage, utils, page}) => {
        await test.step("Complete username and password fields and click login button", async () => {
            await loginPage.login(Env.invalidUsername, Env.invalidPassword);
        });
        await test.step("Verify invalid username notification", async () => {
            notificationMesageAlert = await utils.getNotificationAlert(Notifications.invalidUsername);
            await expect(notificationMesageAlert).toBeVisible();
        });
        await test.step("Verify user remains in login url", async () => {
            await expect(page).toHaveURL(Env.baseURL);
        });
    });
    test("Test Case #4: Login with invalid password", async ({loginPage, utils, page}) => {
        await test.step("Complete username and password fields and click login button", async () => {
            await loginPage.login(Env.validUsername, Env.invalidPassword);
        });
        await test.step("Verify invalid password notification", async () => {
            notificationMesageAlert = await utils.getNotificationAlert(Notifications.invalidPassword);
            await expect(notificationMesageAlert).toBeVisible();
        });
        await test.step("Verify user remains in login url", async () => {
            await expect(page).toHaveURL(Env.baseURL);
        });
    });
    test("Test Case #5: Successful Logout", async ({loginPage, utils, secureAreaPage}) => {
        await test.step("Complete username and password fields and click login button", async () => {
            await loginPage.login(Env.validUsername, Env.validPassword);
        });
        await test.step("Verify successful login notification", async () => {
            notificationMesageAlert = await utils.getNotificationAlert(Notifications.successfulLogin);
            await expect(notificationMesageAlert).toBeVisible();
        });
        await test.step("Click on logout button", async () => {
            await expect(secureAreaPage.logoutButton).toBeVisible();
            await secureAreaPage.logoutButton.click();
        });
        await test.step("Verify successful logout notification", async () => {
            notificationMesageAlert = await utils.getNotificationAlert(Notifications.successfulLogout);
            await expect(notificationMesageAlert).toBeVisible();
        });
    });
});
