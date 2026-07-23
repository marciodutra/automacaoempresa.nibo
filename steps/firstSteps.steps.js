const { When, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/browser');
const FirstStepsPage = require('../pages/FirstStepsPage');

let firstStepsPage;

When('clicar em Primeiros Passos', async function () {
    firstStepsPage = new FirstStepsPage(getPage());
    await firstStepsPage.openFirstSteps();
});

Then('deverá visualizar a página de Primeiros Passos', async function () {
    await firstStepsPage.validateFirstStepPage();
});