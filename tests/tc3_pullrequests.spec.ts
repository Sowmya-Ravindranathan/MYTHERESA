import {test} from '@playwright/test';
import * as fs from "fs";


test.describe('Pull Requests', () => {

    test('Retrieve the list of pull requests from the site', async ({page}) => {
        let pullRequests = [];
        let hasNextPage = true;
        let currentPage = 1;
        

        while (hasNextPage) {
            await page.goto(`https://github.com/appwrite/appwrite/pulls?page=${currentPage}`);

            const pagePullRequests = await page.$$eval('.js-issue-row', rows => {
                return rows.map(row => {
                    const title = row.querySelector('.js-navigation-open').textContent.trim();
                    const author = row.querySelector('.opened-by a').textContent.trim();
                    const createdAt = row.querySelector('.opened-by relative-time').getAttribute('datetime');
                    return {title, author, createdAt};
                });
            });

            pullRequests.push(...pagePullRequests);

            hasNextPage = (await page.$('.paginate-container .next_page')) !== null;
            currentPage++;
        }

        let csvContent = 'Title,Author,Created At\n';
        pullRequests.forEach(pr => {
            csvContent += `${pr.title},${pr.author},${pr.createdAt}\n`;
        });

        fs.writeFileSync('report/pull-requests.csv', csvContent);
    });


});