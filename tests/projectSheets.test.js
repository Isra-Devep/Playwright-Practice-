const { expect } = require('@playwright/test');
const {test} = require('../fixtures');
const ProjectSheetPage = require('../pages/ProjectSheetPage');



test.skip('User is going to add products to a project sheet', async ({ loggedInPage }) => {
    const projectSheetPage = new ProjectSheetPage(loggedInPage);
    await projectSheetPage.visit();
    await projectSheetPage.clickAddProductsDropdownButton();
    await projectSheetPage.clickAddFromExistingProductsButton();
    const count = await projectSheetPage.checkSelectedItemsCount();
    await expect(projectSheetPage.addSelectedButton).toHaveText(`Add Selected (${count})`);
    await loggedInPage.pause();
});
