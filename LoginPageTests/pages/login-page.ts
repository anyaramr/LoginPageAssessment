import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginPageTitle: Locator;
    readonly loginPageDescription: Locator;
    readonly usernameLabel: Locator;
    readonly usernameInput: Locator;
    readonly passwordLabel: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginPageTitle =  this.page.getByRole('heading', { name: 'Login Page' });
        this.loginPageDescription = this.page.getByRole('heading', { name: 'This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.' });
        this.usernameLabel = this.page.getByText('Username', { exact: true });
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordLabel = this.page.getByText('Password', { exact: true });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async login(username: string, password: string) {
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}