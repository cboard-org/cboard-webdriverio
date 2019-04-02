import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

class SettingsAppPage extends BasePage {
  /**
   * define elements
   */
  get pageH6() {
    return $('h6=Settings');
  }
  get export() {
    return $('span=Export');
  }
  get import() {
    return $('span=Import');
  }
  get saveButton() {
    return $('span=Save');
  }
  get exportButton() {
    return $('#export-button');
  }
  get exportFormatMenu() {
    return $('//ul{@role="menu"');
  }

  /**
   * define or overwrite page methods
   */
    open() {
        browser.url('https://app.cboard.io/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    RootAppPage.unblockSettings();
    RootAppPage.clickOnSetttings();
    expect(this.pageH6.isDisplayed()).to.be.true;
  }

  reload() {
    super.reload();
  }

  clickOnExport() {
    return this.export.click();
  }

  clickOnImport() {
    return this.import.click();
  }

  exportBoard(format = 'Cboard') {
    this.exportButton.click();
    this.exportFormatMenu.selectByVisibleText(format);
  }
}

export default new SettingsAppPage();