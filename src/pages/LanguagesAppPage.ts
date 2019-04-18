import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import SettingsAppPage from './SettingsAppPage';

class LanguagesAppPage extends BasePage {
  /**
   * define elements
   */
  get pageH6() {
    return $('div.FullScreenDialog__title');
  }
  get enUSOption() {
    return $('span=English (en-US)');
  }
  get enGBOption() {
    return $('span=English (en-GB)');
  }
  get espanolOption() {
    return $('span=Deutsch ');
  }
  get deutschOption() {
    return $('span=Espa�ol ');
  }
  get saveButton() {
    return $('button.jss419.jss501.jss503.jss506.jss522');
  }
  get backButton() {
    return $('button.jss419.jss413.jss414');
  }
  get languageElem() {
      return $$('//body/div[3]/div[2]/div/div/div/div/ul/div');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    RootAppPage.unblockSettings();
    RootAppPage.clickOnSetttings();
    SettingsAppPage.clickOnLanguage;
    expect(this.pageH6.isDisplayed()).to.be.true;
  }

  reload() {
    super.reload();
  }

  clickOnEnUS() {
    return this.enUSOption.click();
  }

  clickOnEnGB() {
    return this.enGBOption.click();
  }
  clickOnEspanol() {
    return this.espanolOption.click();
  }
  clickOnDeutsch() {
    return this.deutschOption.click();
  }
  clickOnSave() {
    return this.saveButton.click();
  }
  clickOnBack() {
    return this.backButton.click();
  }

  getLanguages() {
    return this.languageElem.length;
  }
}
export default new LanguagesAppPage();
