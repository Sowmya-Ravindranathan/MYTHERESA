import {expect, Page} from '@playwright/test';
import {baseURL} from "../config/config";

export class AccountPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto("/de/en/account/login");
    }

    async loginWithCredentials(email) {
        await this.page.locator('.signinform input[name="email"]').fill(email);
        await this.page.locator('.signinform input[name="password"]').fill("Password1$");
        await this.page.locator('.signinform__submit .button').click();
    }


    async verifyMyAccountPageTitle() {
        await this.page.waitForURL(`${baseURL}/de/en/account/overview`);
        await this.page.waitForLoadState("domcontentloaded");
        expect(await this.page.title()).toEqual('My Account Dashboard | Mytheresa')
    }
}