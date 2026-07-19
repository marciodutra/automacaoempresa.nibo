const { Given, Then } = require('@cucumber/cucumber');
const OrganizationPage = require('../pages/OrganizationPage');


Given('I access the organization page', async function () {

    await OrganizationPage.open();

});


Then('I close the welcome popup if displayed', async function () {

    await OrganizationPage.closeWelcomePopupIfDisplayed();

});


Then('I should see the my companies page displayed', async function () {

    const displayed = await OrganizationPage.isOrganizationPageDisplayed();

    if (!displayed) {

        throw new Error('Organization page was not displayed');

    }

});