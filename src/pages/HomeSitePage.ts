import BasePage from 'src/pages/BasePage';

class HomePage extends BasePage {
  /**
   * define elements
   **/
  get startCboard() {
    return browser.$('//a[href="https://app.cboard.io"]');
  }
  get blog() {
    return browser.$('=BLOG');
  }
  get about() {
    return browser.$('=ABOUT');
  }
  get contact() {
    return browser.$('=CONTACT');
  }
  get help() {
    return browser.$('=HELP');
  }
  get github() {
    return browser.$('=GITHUB');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('https://www.cboard.io/');
  }

  clickOnStartCboard() {
    this.startCboard.click();
  }

  clickOnBlogMenuItem() {
    this.blog.click();
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

export default new HomePage();
