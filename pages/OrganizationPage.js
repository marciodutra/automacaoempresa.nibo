const { getPage } = require('../support/browser');

class OrganizationPage {

    async open() {

        const page = getPage();

        await page.goto('https://empresa.nibo.com.br/Organization');

    }

    async getMyCompaniesTitle() {

        const page = getPage();

        return await page.locator('h1').innerText();

    }

    async closeWelcomePopupIfDisplayed() {

        const page = getPage();

        const closeButton = page.locator('div.up-x-to-close');

        try {

            await closeButton.waitFor({
                state: 'visible',
                timeout: 5000
            });

            await closeButton.click();

        } catch (error) {

            // Popup não apareceu.
            // Continua normalmente.

        }

    }

    async isOrganizationPageDisplayed() {

    const page = getPage();

    const title = page.locator('h1', {
        hasText: 'Minhas empresas'
    });

    await title.waitFor({
        state: 'visible',
        timeout: 15000
    });

    return await title.isVisible();

}

}

module.exports = new OrganizationPage();