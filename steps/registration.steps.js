const { Given, Then } = require('@cucumber/cucumber');

const RegistrationPage = require('../pages/RegistrationPage');
const TestData = require('../test-results/utils/TestData');
const OrganizationPage = require('../pages/OrganizationPage');

const { createTestUser } = require('../database/queries');
const { encrypt } = require('../database/encryption');


Given('I access the registration page', async function () {

    await RegistrationPage.clickRegisterLink();

});


Then('the registration page should be displayed', async function () {

    const displayed = await RegistrationPage.isRegistrationPageDisplayed();

    if (!displayed) {

        throw new Error('Registration page was not displayed');

    }

});


Then('the registration form fields should be displayed', async function () {

    if (!await RegistrationPage.isEmailFieldDisplayed()) {

        throw new Error('Email field was not displayed');

    }

    if (!await RegistrationPage.isNameFieldDisplayed()) {

        throw new Error('Name field was not displayed');

    }

    if (!await RegistrationPage.isPhoneFieldDisplayed()) {

        throw new Error('Phone field was not displayed');

    }

    if (!await RegistrationPage.isPasswordFieldDisplayed()) {

        throw new Error('Password field was not displayed');

    }

});


Given('I fill in the registration form with valid data', async function () {

    this.user = TestData.createUser();

    await RegistrationPage.fillRegistrationForm(this.user);

});


Given('I confirm the registration', async function () {

    await RegistrationPage.clickConfirmButton();


    const createdUser = await createTestUser(
    this.user.name,
    this.user.email,
    encrypt(this.user.password)
);


this.user.id = createdUser.id;


    await OrganizationPage.closeWelcomePopupIfDisplayed();

});


Then('the organization page should be displayed', async function () {

    const displayed = await OrganizationPage.isOrganizationPageDisplayed();

    if (!displayed) {

        throw new Error('Organization page was not displayed');

    }

});