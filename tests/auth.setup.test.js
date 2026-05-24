const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('save auth state', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login(process.env.FOHLIO_EMAIL, process.env.FOHLIO_PASSWORD   );
     await page.context().storageState({ path: 'state.json' });
});