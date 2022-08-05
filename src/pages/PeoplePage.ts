import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
//import $ from 'webdriverio/build/commands/browser/$';

class PeoplePage extends BasePage {
  /**
   * define elements
   */
  get pageH6() {
    return $('h6=People');
  }
  get saveButtton() {
    return $('#save-button');
  }
  get userName() {
    return $('#user-name');
  }
  get userEmail() {
    return $('#user-email');
  }
  get userBirthday() {
    return $('#user-birthday');
  }
  get userLocation() {
    return $('#user-location');
  }
  get countryCode() {
    return $('div[country-code]')
  }

  /**
   * define or overwrite page methods
   */
  openFromSettings() {
    browser.url('/');
    WelcomeAppPage.loginSkip();
    RootAppPage.skipTour();
    RootAppPage.unblockSettings();
    RootAppPage.skipTour();
    RootAppPage.clickOnSetttings();
    SettingsAppPage.skipTour();
    SettingsAppPage.clickOnPeople();
    this.pageH6.waitForDisplayed(4000);
  }

  openFromRootPage() {
    browser.url('/');
    WelcomeAppPage.loginSkip();
    RootAppPage.skipTour();
    RootAppPage.unblockSettings();
    RootAppPage.skipTour();
    RootAppPage.loginOrSignUp();
    this.pageH6.waitForDisplayed(4000);
  }
  
  reload() {
      super.reload();
  }

  async getCountryCode() {
    return await this.countryCode.getAttribute('country-code');
  }
}
export default new PeoplePage();