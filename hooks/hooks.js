const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { launchBrowser, closeBrowser } = require('../support/browser');

setDefaultTimeout(30000);

Before(async function () {

    await launchBrowser();

});

After(async function () {

    await closeBrowser();

});