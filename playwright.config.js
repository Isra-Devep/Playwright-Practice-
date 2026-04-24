const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: process.env.CI === 'true',
        slowMo: 1500,
    }
});