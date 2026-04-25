const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        headless: process.env.CI === 'true',
        slowMo: 1500,
    }
});