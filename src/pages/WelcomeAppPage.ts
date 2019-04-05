import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';

class WelcomeAppPage extends BasePage {
  /**
   * define elements
   */
  get login() {
    return $('button.WelcomeScreen__button--login');
  }
  get signup() {
    return $('button=Sign Up');
  }
  get signmeup() {
    return $('button=Sign me up');
  }
  get skip() {
    return $('button=Skip for now');
  }
  get about() {
    return $('=ABOUT');
  }
  get contact() {
    return $('=CONTACT');
  }
  get help() {
    return $('=HELP');
  }
  get github() {
    return $('=GITHUB');
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
  get loginButton() {
    return $('//button[@type="submit"]');
  }
  get signupConfirmMessage() {
    return $('div.SignUp__status.SignUp__status--success');
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
    this.login.click();
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.loginButton.click();
    if (loginError) {
    } else {
      RootAppPage.checkTitle();
    }
  }

  loginSkip() {
    this.skip.click();
    RootAppPage.checkTitle();
  }

  signupUser(name, username, password) {
    this.signup.click();
    this.nameInput.setValue(name);
    this.usernameInput.setValue(username);
    this.passwordInput.setValue(password);
    this.passwordConfirmInput.setValue(password);
    this.signmeup.click();
    var msg = browser.$('div.SignUp__status.SignUp__status--success').getText();
    expect(msg).to.contain(
      'An email has been sent to you. Please check it to verify your account.'
    );
  }

  clickOnAboutMenuItem() {
    this.about.click();
  }

  clickOnContactMenuItem() {
    this.contact.click();
  }

  clickOnHelpMenuItem() {
    this.help.click();
  }

  clickOnGithubMenuItem() {
    this.github.click();
  }
}

export default new WelcomeAppPage();
