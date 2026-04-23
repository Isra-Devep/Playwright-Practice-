const { test: base } = require('@playwright/test');
const LoginPage = require('./pages/LoginPage');

const test = base.extend({
    loggedInPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        await loginPage.login('team1.owner@fohlio.io', '12qwasZX!');
        await use(page);
    }
});

module.exports = { test };