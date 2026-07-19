const { chromium } = require('playwright');

let browser;
let context;
let page;

async function launchBrowser() {

    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();

    page = await context.newPage();

    await page.goto('https://empresa.nibo.com.br/', {
    waitUntil: 'domcontentloaded'
});

    return page;
}

async function closeBrowser() {

    if (browser) {
        await browser.close();
    }

}

function getPage() {

    return page;

}

module.exports = {
    launchBrowser,
    closeBrowser,
    getPage
};