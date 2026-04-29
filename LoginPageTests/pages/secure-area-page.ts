import { Locator, Page } from '@playwright/test';

export class SecureAreaPage {
    readonly page: Page;
    readonly secureAreaPageTitle: Locator;
    readonly secureAreaPageDescription: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.secureAreaPageTitle =  this.page.getByRole('heading', { name: 'Secure Area', exact: true });
        this.secureAreaPageDescription = this.page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' });
        this.logoutButton = this.page.getByRole('link', { name: 'Logout' });
    }

    async logout() {
        await this.logoutButton.isVisible();
        await this.logoutButton.click();
    }
}