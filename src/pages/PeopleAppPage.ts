import { assert } from 'chai';
import { expect } from 'chai';
var requests = require('requests');


import BasePage from 'src/pages/BasePage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';

class PeopleAppPage extends BasePage {
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
  open() {
    browser.url('/');
    WelcomeAppPage.loginSkip();
    RootAppPage.skipTour();
    RootAppPage.unblockSettings();
    RootAppPage.skipTour();
    RootAppPage.clickOnSetttings();
    browser.pause(2000);
    if ($('//button[@aria-label="Close Tour"]').isDisplayed()) {
      $('//button[@aria-label="Close Tour"]').click();
    }
    $('//a[@href="/settings/people"]').click();
    this.pageH6.waitForDisplayed(6000);
  }

  async getCountryCode() {
    return await this.countryCode.getAttribute('country-code');
  }


  getUserLocation() {
    return this.userLocation.getText();
  }

  async setProxyCountry() {

  requests.get("https://proxy.webshare.io/api/profile/", headers={"Authorization": "Token 024a08ff927d4b8cb444a0cbbecfa132aec6ce40"})
  }

}
export default new PeopleAppPage();
