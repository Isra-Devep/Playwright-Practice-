// not needed since playwright willl handle const { chromium  } = require('playwright');
const { expect , test } =  require('@playwright/test');
const LoginPage = require('../pages/LoginPage');



test("User is going to log in " , async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.visit();
    await loginPage.login('team1.owner@fohlio.io', '12qwasZX!');
    await expect(page).toHaveURL('https://develop.fohlio.io/projects');
    await expect(page).toHaveTitle('Fohlio');
    await expect(page.getByText('Project List', { exact : true }).first()).toBeVisible();
    await expect(page.getByText('Project List', { exact : true }).first()).toHaveText('Project List');

    console.log('done');
});