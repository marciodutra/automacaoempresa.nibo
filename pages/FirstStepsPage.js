const { expect } = require('@playwright/test');

class FirstStepsPage {
  constructor(page) {
    this.page = page;

    this.firstStepsLink = page.locator('h2.group-header-title', {
      hasText: 'Primeiros Passos'
    });

    this.pageTitle = page.locator('.step-header-title', {
      hasText: 'Criar sua empresa no Nibo'
    });
  }

  async openFirstSteps() {
    await this.firstStepsLink.waitFor({ state: 'visible' });
    await this.firstStepsLink.click();
  }

  async validateFirstStepPage() {
    await expect(this.pageTitle).toBeVisible();
  }
}

module.exports = FirstStepsPage;