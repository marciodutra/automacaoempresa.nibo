const { chromium } = require('playwright');

let browser;
let context;
let page;

async function launchBrowser() {

    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext({

        recordVideo: {
            dir: 'evidencias/videos/',
            size: {
                width: 1920,
                height: 1080
            }
        }

    });

    await context.tracing.start({

        screenshots: true,
        snapshots: true

    });

    page = await context.newPage();

    await page.goto(
        'https://empresa.nibo.com.br/',
        {
            waitUntil: 'domcontentloaded'
        }
    );

    return page;

}

async function closeBrowser() {

    if (context) {

        await context.close();

    }

    if (browser) {

        await browser.close();

    }

}

function getPage() {

    return page;

}

function getContext() {

    return context;

}

module.exports = {

    launchBrowser,
    closeBrowser,
    getPage,
    getContext

};