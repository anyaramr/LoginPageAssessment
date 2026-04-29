import { Locator, Page } from '@playwright/test';

export class Utils {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async getNotificationAlert(notificationMessage: string) {
       const notificationAlert = this.page.getByText(notificationMessage);
       return notificationAlert;
    }
}