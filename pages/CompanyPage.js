const { getPage } = require('../support/browser');


class CompanyPage {


    async clickAddCompany() {

        const page = getPage();


        await page.locator(
            'a[title="Criar Empresa"]'
        ).click();

    }


    async fillCompanyForm(company) {

        const page = getPage();


        await page.locator(
            'input[formcontrolname="document"]'
        ).fill(
            company.cnpj
        );


        await page.locator(
            '#name'
        ).fill(
            company.companyName
        );

    }


    async selectCompanySource(option) {

    const page = getPage();


    await page.locator(
        `#${option}`
    ).check();

}


    async clickCreateCompany() {

        const page = getPage();


        await page.locator(
            'button[title="Criar"]'
        ).click();


        await page.waitForLoadState(
            'networkidle'
        );

    }


    async closeCompanyPopupIfDisplayed() {

    const page = getPage();


    const closeButton = page.locator(
        'div[userpilot-act="close-tut"]'
    );


    try {

        await closeButton.waitFor({
            state: 'visible',
            timeout: 5000
        });


        await closeButton.click();


    } catch (error) {

        // popup não apareceu

    }

}



async isCompanyPageDisplayed() {

    const page = getPage();


    const homeMenu = page.getByRole(
        'link',
        {
            name: /Início/
        }
    );


    await homeMenu.waitFor({

        state: 'visible',

        timeout: 15000

    });


    return await homeMenu.isVisible();

}


}


module.exports = new CompanyPage();