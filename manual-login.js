const { chromium } = require('playwright');

async function test() {
    const chromeBrowser = await chromium.launch({ headless: false, slowMo: 1000 });
    const tab = await chromeBrowser.newPage();
    await tab.goto('https://develop.fohlio.io/');
    await tab.fill('#email', 'team1.owner@fohlio.io');
    await tab.fill('#password', '12qwasZX!');
    await tab.click('[data-testid="sign_in_form_button"]');
    await chromeBrowser.close();
    console.log('done');
}

test();
