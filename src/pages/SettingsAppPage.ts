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
  get language() {
    return $('//a[@href="/settings/language"]');
  }
  get speech() {
    return $('//a[@href="/settings/speech"]');
  }
  get export() {
    return $('//a[@href="/settings/export"]');
  }
  get import() {
    return $('//a[@href="/settings/import"]');
  }
  get display() {
    return $('//a[@href="/settings/display"]');
  }
  get scanning() {
    return $('//a[@href="/settings/scanning"]');
  }
  get navigation() {
    return $('//a[@href="/settings/navigation"]');
  }
  get exportButton() {
    return $('#export-button');
  }
  get exportFormatMenu() {
    return $('//ul[@role="menu"]');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    RootAppPage.unblockSettings();
    RootAppPage.clickOnSetttings();
    expect(this.pageH6.isDisplayed()).to.be.true;
  }

  reload() {
    super.reload();
  }

  clickOnLanguage() {
    return this.export.click();
  }

  clickOnSpeech() {
    return this.export.click();
  }
  clickOnExport() {
    return this.export.click();
  }

  clickOnImport() {
    return this.import.click();
  }
  clickOnDisplay() {
    return this.export.click();
  }
  clickOnNavigation() {
    return this.export.click();
  }
  clickOnScanning() {
    return this.export.click();
  }

  exportBoard(format = 'Cboard') {
    this.exportButton.click();
    this.exportFormatMenu.selectByVisibleText(format);
  }
}

export default new SettingsAppPage();
