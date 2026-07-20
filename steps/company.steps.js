const { When, Then } = require('@cucumber/cucumber');

const CompanyPage = require('../pages/CompanyPage');

const TestData = require('../test-results/utils/TestData');

const { createTestCompany } = require('../database/queries');


When('I click add company', async function () {

    await CompanyPage.clickAddCompany();

});


When('I fill the company registration form with valid data', async function () {

    this.company = TestData.createCompany();


    await CompanyPage.fillCompanyForm(
        this.company
    );


    await CompanyPage.selectCompanySource(
        this.company.sourceOption
    );

});


When('I confirm company creation', async function () {

    await CompanyPage.clickCreateCompany();


    await createTestCompany(
        this.user.id,
        this.company.cnpj,
        this.company.companyName
    );

});


Then('the company page should be displayed', async function () {


    await CompanyPage.closeCompanyPopupIfDisplayed();


    const displayed =
        await CompanyPage.isCompanyPageDisplayed();


    if (!displayed) {

        throw new Error(
            'Company page was not displayed'
        );

    }


});