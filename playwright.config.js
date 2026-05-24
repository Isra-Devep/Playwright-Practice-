require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    use: {
        headless: process.env.CI === 'true',
        slowMo: 1500,
        trace: 'on',
    },
    projects: [
        {
            name: 'setup',
            testMatch: '**/auth.setup.test.js',
        },
        {
            name: 'fohlio',
            dependencies: ['setup'],
            use: {
                storageState: 'state.json',
            },
        }
    ]
});