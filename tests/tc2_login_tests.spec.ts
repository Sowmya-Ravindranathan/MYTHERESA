import {chromium, test} from '@playwright/test';
import {Utils} from "../utils/utils";
import {AccountPage} from "../pages/account_page";
import {baseURL} from "../config/config";


test.describe('MyTheresa Login Scenarios', () => {
    let accountPage: AccountPage;
    let email;

    //cookie added for captcha and accept cookies
    const cookies = [
        {name: "mt_csf", value: "15340000", url: baseURL},
        {name: "TC_PRIVACY_CENTER", value: "1%2C3", url: baseURL},
        {
            name: "TC_PRIVACY",
            value: "0%40006%7C8%7C4525%401%2C3%402%401689787597343%2C1689787597343%2C1723483597343%40",
            url: baseURL
        }];

    test.beforeEach(async ({page}) => {
        const util = new Utils();
        email = await util.getMytheresaUser();

        const context = await page.context();
        await context.addCookies(cookies);

        accountPage = new AccountPage(page);
        await accountPage.goto();
    });

    test('Verify Whether the user is able to login successfully', async ({page}) => {
        await accountPage.loginWithCredentials(email);
        await accountPage.verifyMyAccountPageTitle()
    });

});

