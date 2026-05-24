const { test, expect } =  require('@playwright/test');
const CreateProjectPage = require('../pages/CreateProjectPage');
test.use({ storageState: 'state.json' });

test('Create project', async ({page})=>{
    const createProjectPage = new CreateProjectPage(page);
    await createProjectPage.visit();
    await createProjectPage.createProject(`ISRA TEST PROJECT  ${Date.now()}`);

});

test('Create project 2 ', async ({page})=>{
    const createProjectPage = new CreateProjectPage(page);
    await createProjectPage.visit();
    await createProjectPage.createProject(`ISRA TEST PROJECT  ${Date.now()}`);

});
