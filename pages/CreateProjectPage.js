class CreateProjectPage {
    constructor(page){
        this.page = page;
        this.newProjectButton = page.getByTestId('sidebar_new_project_button');
        this.projectNameField  = page.locator('#projectName');
        this.projectTypeField = page.locator('#projectTypeId');
        this.firstProjectTypeOption = page.locator('.ant-select-item-option').first();
        this.nextButton = page.getByTestId('new-project_next');
        this.currencyToggle = page.getByRole('switch');
        this.createProjectButton = page.getByTestId('new-project_create');





    }
    
    async visit() {
        await this.page.goto('https://develop.fohlio.io/projects');
    }  
    
async createProject(projectName){
    await this.newProjectButton.click();
    await this.page.waitForURL('**/projects/new');
    await this.projectNameField.fill(projectName);
    await this.projectTypeField.click();
    await this.firstProjectTypeOption.click();
    await this.nextButton.click();
    await this.page.waitForSelector('text=Select Specification Category');
    await this.nextButton.click();
    await this.page.waitForSelector('text=Procurement Settings');
    await this.nextButton.click();
    await this.page.waitForSelector('text=Select Currency');
    await this.currencyToggle.click();
    await this.createProjectButton.click();


    };
};

module.exports = CreateProjectPage;

