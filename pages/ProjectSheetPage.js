class ProjectSheetPage {
    constructor(page) {
        this.page = page;
        this.addProductsDropdownButton = page.getByRole('button', { name: /Add Products/i });
        this.addFromExistingProductsButton = page.getByText('Add from Existing Projects');
        this.drawer = page.locator('.ant-drawer-content');
        this.checkbox = this.drawer.getByRole('checkbox');
        this.addSelectedButton = this.drawer.getByText(/Add Selected/i);

    
        
        

    }

    async visit() {
        await this.page.goto('https://develop.fohlio.io/design-specifications/5?templateId=1&dashboardId=1');
        await this.page.waitForURL('https://develop.fohlio.io/design-specifications/5?templateId=1&dashboardId=1');

    }
    async clickAddProductsDropdownButton() {
        await this.addProductsDropdownButton.click();
    }
    async clickAddFromExistingProductsButton() {
        await this.addFromExistingProductsButton.click();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(1000);
        await this.checkbox.nth(0).check();
        await this.checkbox.nth(1).check();
        await this.checkbox.nth(2).check();

    }

    async checkSelectedItemsCount() {
        const checked = await this.drawer.getByRole('checkbox', { checked: true }).count();
        console.log(`Checked items count: ${checked}`);
        return checked;
    }
}

module.exports = ProjectSheetPage;