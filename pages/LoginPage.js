const { getPage } = require('../support/browser');

class LoginPage {

    async fillEmail(email) {

        const page = getPage();

        await page.locator('#Username').fill(email);

    }

    async clickContinue() {

        const page = getPage();

        await page.locator('#submitButton').click();

    }

    async fillPassword(password) {

        const page = getPage();

        await page.locator('#Password').fill(password);

    }

    async clickLogin() {

        const page = getPage();

        await page.locator('#submitButton').click();

    }

    async isPasswordFieldDisplayed() {

    const page = getPage();

    return await page.locator('#Password').isVisible();

}

}

module.exports = new LoginPage();