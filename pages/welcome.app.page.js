var assert = require('chai').assert;
var expect = require('chai').expect;
var page = require('./page');

var rootBoardPage = require('./root.app.page');

var welcomeAppPage = Object.create(page, {
  /**
   * define elements
   */
  login: {
    get: function() {
      return $('button=Login');
    }
  },
  signup: {
    get: function() {
      return $('button=Sign Up');
    }
  },
  signmeup: {
    get: function() {
      return $('button=Sign me up');
    }
  },
  skip: {
    get: function() {
      return $('button=Skip for now');
    }
  },
  title: {
    get: function() {
      return $('=CONTACT');
    }
  },
  logo: {
    get: function() {
      return $('=HELP');
    }
  },
  mission: {
    get: function() {
      return $('=GITHUB');
    }
  },
  nameInput: {
    get: function() {
      return $('//*[@name="name"]');
    }
  },
  usernameInput: {
    get: function() {
      return $('//*[@name="email"]');
    }
  },
  passwordInput: {
    get: function() {
      return $('//*[@name="password"]');
    }
  },
  passwordConfirmInput: {
    get: function() {
      return $('//*[@name="passwordConfirm"]');
    }
  },
  loginButton: {
    get: function() {
      return $('//button[@type="submit"]');
    }
  },
  signupConfirmMessage: {
    get: function() {
      return $('div.SignUp__status.SignUp__status--success');
    }
  },

  /**
   * define or overwrite page methods
   */
  open: {
    value: function() {
      page.open.call(this, 'https://app.cboard.io/');
    }
  },

  reload: {
    value: function() {
      page.reload.call(this);
    }
  },

  loginUser: {
    value: function(username, password, loginError) {
      this.login.click();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
      if (loginError) {
      } else {
        rootBoardPage.checkTitle();
      }
    }
  },

  loginSkip: {
    value: function() {
      this.skip.click();
      rootBoardPage.checkTitle();
    }
  },

  signupUser: {
    value: function(name, username, password) {
      this.signup.click();
      this.nameInput.setValue(name);
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.passwordConfirmInput.setValue(password);
      this.signmeup.click();
      var msg = browser.$('div.SignUp__status.SignUp__status--success').getText();
      expect(msg).to.contain('successfully');
    }
  },

  clickOnAboutMenuItem: {
    value: function() {
      this.about.click();
    }
  },

  clickOnContactMenuItem: {
    value: function() {
      this.contact.click();
    }
  },

  clickOnHelpMenuItem: {
    value: function() {
      this.help.click();
    }
  },

  clickOnGithubMenuItem: {
    value: function() {
      this.github.click();
    }
  }
});

module.exports = welcomeAppPage;
