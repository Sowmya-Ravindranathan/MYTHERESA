import {chromium,expect, Page} from '@playwright/test';
// @ts-ignore
import registerPayload from "../data/registration_payload";

export class Utils {
    

    async getMytheresaUser() {
        const email = `testaccount${Date.now()}@mytheresatest.com`;
        await this.registerUser(email);
        return email;
    }

    async registerUser(email: string) {
        const browser = await chromium.launch({headless: true});
        const context = await browser.newContext();
        const page = await context.newPage();
        const data = JSON.stringify(registerPayload).replace("email_value", email)
        const payload = JSON.parse(data);

        const response = await page.request.post("https://api.mytheresa.com/api", {
            ignoreHTTPSErrors: true,
            headers: {
                'Content-Type': 'application/json',
                'X-Store': 'DE',
                'X-Country': 'DE',
                'Accept-Language': 'en',
            },
            data: payload
        });
        await expect(response.status()).toEqual(200);
        await page.context().close();
    }
}