const { Given, When, Then } = require('@cucumber/cucumber');

const LoginPage = require('../pages/LoginPage');
const OrganizationPage = require('../pages/OrganizationPage');

const { getActiveTestUser } = require('../database/queries');
const { decrypt } = require('../database/encryption');


Given('I access the login page', async function () {

    // O Before Hook já abre a página de login.

});


When('I enter a valid email', async function () {

    this.user = await getActiveTestUser();

    await LoginPage.fillEmail(
        this.user.email
    );

});


When('I continue to password step', async function () {

    await LoginPage.clickContinue();

});


When('I enter a valid password', async function () {

    const password = decrypt(
        this.user.password_encrypted
    );


    await LoginPage.fillPassword(
        password
    );

});


When('I submit the login', async function () {

    await LoginPage.clickLogin();

});


Then('I close the welcome popup if displayed', async function () {

    await OrganizationPage.closeWelcomePopupIfDisplayed();

});


Then('I should see the my companies page displayed', async function () {

    const displayed =
        await OrganizationPage.isOrganizationPageDisplayed();


    if (!displayed) {

        throw new Error(
            'Organization page was not displayed'
        );

    }

});