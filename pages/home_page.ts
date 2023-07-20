import {expect, Page} from '@playwright/test';


export class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async getAllLinksFromPage() {
        return await this.page.evaluate(() => {
            return Array.from(document.links).map(item => item.href);
        });
    }

    async verifyPageLinksReturnValidStatusCode(pageLinks: string[]) {
        for (const url of pageLinks) {
            try {
                const response = await fetch(url);
                expect(response.status.toString()).toMatch(/^(200|30[0-9])$/)
            }catch (e) {
                console.log(`Url Failed Loading - ${url}`);
            }
        }
    }
}