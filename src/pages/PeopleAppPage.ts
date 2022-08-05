import { assert } from 'chai';
import { expect } from 'chai';

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
  }

}
export default new PeopleAppPage();
