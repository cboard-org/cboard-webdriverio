import randomstring from 'randomstring';

import WelcomeAppPage from 'src/pages/WelcomeAppPage';

describe('Welcome page', function() {
    beforeEach(function () {
        browser.reloadSession();
    WelcomeAppPage.open();
  });

  afterEach(function() {
  });

  it('should successfully login a valid user', function() {
    WelcomeAppPage.loginUser();
  });

  it('should open and close and successfully login a valid user', function() {
    WelcomeAppPage.loginButton.click();
    WelcomeAppPage.cancelButton.click();
    WelcomeAppPage.loginUser();
  });

  it('should reject a login with an invalid user', function() {
    WelcomeAppPage.loginUser('nothing@cboard.io', '112233', true);
  });

  it('should skip login when user presses on skip button', function() {
    WelcomeAppPage.loginSkip();
  });

  it('should successfully signup a valid user', function() {
    var tag =
    randomstring.generate({
      length: 16,
      charset: 'alphabetic'
    });
    const email = `${process.env.TESTMAIL_NAMESPACE}.${tag}@inbox.testmail.app`;
    WelcomeAppPage.signupUser(tag, email, process.env.CBOARD_USER_PASSWORD);
  });
});
