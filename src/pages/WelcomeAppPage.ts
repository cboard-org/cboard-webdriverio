import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';

class WelcomeAppPage extends BasePage {
  /**
   * define elements
   */
  get loginButton() {
    return $('button.WelcomeScreen__button--login');
  }
  get signupButton() {
    return $('button=Sign Up');
  }
  get signmeupButton() {
    return $('button=Sign me up');
  }
  get skipButton() {
    return $('button=Skip for now');
  }
  get nameInput() {
    return $('//*[@name="name"]');
  }
  get usernameInput() {
    return $('//*[@name="email"]');
  }
  get passwordInput() {
    return $('//*[@name="password"]');
  }
  get passwordConfirmInput() {
    return $('//*[@name="passwordConfirm"]');
  }
  get submitButton() {
    return $('//button[@type="submit"]');
  }
  get cancelButton() {
    return $('button=Cancel');
  }
  get signupConfirmMessage() {
    return $('div.SignUp__status.SignUp__status--success');
  }
  get loginErrorMessage() {
    return $('div.Login__status.Login__status--error');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('/');
  }

  reload() {
    super.reload();
  }

  loginUser(username, password, loginError = false) {
    this.loginButton.click();
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.submitButton.click();
    if (loginError) {
      this.loginErrorMessage.waitForDisplayed(
        9000,
        false,
        'Login Error message not displayed'
      );
    } else {
      RootAppPage.checkTitle();
    }
  }

  loginSkip() {
    this.skipButton.click();
    RootAppPage.checkTitle();
  }

  signupUser(name, username, password) {
    this.signupButton.click();
    this.nameInput.setValue(name);
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.passwordConfirmInput.setValue(password);
    this.signmeupButton.click();
    var msg = browser.$('div.SignUp__status.SignUp__status--success').getText();
    expect(msg).to.contain(
      'An email has been sent to you. Please check it to verify your account.'
    );
  }
}

export default new WelcomeAppPage();
