const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Check error handling on project sheet filter', async ({ page }) => {

    // Step 1 - login
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login('team1.owner@fohlio.io', '12qwasZX!');

    // Step 2 - set up interception
    await page.route('**/graphql', async (route) => {
        const postData = route.request().postData();
        if (!postData) { await route.continue(); return; }
        
        const body = JSON.parse(postData);

        if (body.operationName === 'LoadProjectSheetProjectModels') {
            await route.fulfill({
                status: 500,
                contentType: 'application/json',
                body: JSON.stringify({ errors: [{ message: 'Server error' }] })
            });
        } else {
            await route.continue();
        }
    });

    // Step 3 - visit project sheets
    await page.goto('https://develop.fohlio.io/design-specifications/110', { 
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });
    
    // Step 4 - click filter
    await page.locator('[data-cost-tracker-item-id="unassigned"]').click();
    
    await page.pause();
});