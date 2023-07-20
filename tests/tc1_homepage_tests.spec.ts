import {test, expect} from '@playwright/test';
import {HomePage} from "../pages/home_page";


test.describe('MyTheresa Test Scenarios for Homepage', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/de/en/men');
    });

    test('Verify whether there are no javascript errors while loading the page', async ({page}) => {
        const pageErrors = [];
        page.on('pageerror', exception => pageErrors.push(exception.stack));
        expect(pageErrors.length).toBe(0);
    });

    // Link validation happens with the background fetch so the home page might seem still till the test is complete.
    test('Verify whether all the links in the page are stable', async ({page}) => {
        test.setTimeout(600000);
        const homePage = new HomePage(page);
        const pageLinks = await homePage.getAllLinksFromPage();
        await homePage.verifyPageLinksReturnValidStatusCode(pageLinks);
    });

});


