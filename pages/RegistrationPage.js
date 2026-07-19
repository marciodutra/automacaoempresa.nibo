const { getPage } = require('../support/browser');

class RegistrationPage {

    async clickRegisterLink() {

        const page = getPage();

        const registerLink = page.locator('a[href^="/Account/Create?origin=login"]');

        await registerLink.click();

        await page.waitForLoadState('networkidle');

    }

    async isRegistrationPageDisplayed() {

        const page = getPage();

        return await page.locator('#Phone').isVisible();

    }

    async isEmailFieldDisplayed() {

        const page = getPage();

        return await page.locator('#Email').isVisible();

    }

    async isNameFieldDisplayed() {

        const page = getPage();

        return await page.locator('#Name').isVisible();

    }

    async isPhoneFieldDisplayed() {

        const page = getPage();

        return await page.locator('#Phone').isVisible();

    }

    async isPasswordFieldDisplayed() {

        const page = getPage();

        return await page.locator('#Password').isVisible();

    }

    async fillRegistrationForm(user) {

    const page = getPage();

    await page.locator('#Email').fill(user.email);
    await page.locator('#Name').fill(user.name);
    await page.locator('#AreaCode').fill(user.areaCode);
    await page.locator('#Phone').fill(user.phone);
    await page.locator('#Password').fill(user.password);

}

    async clickConfirmButton() {

        const page = getPage();

        await page.locator('input[value="Confirmar"]').click();

    }

}

module.exports = new RegistrationPage();