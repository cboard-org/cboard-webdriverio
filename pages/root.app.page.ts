import { assert } from 'chai';
import Page from 'pages/Page';

class RootAppPage extends Page {
  /**
   * define elements
   */
  get rootboard() {
    return $('=home');
  }

  /**
   * define or overwrite page methods
   */
  public open() {
    super.open('https://app.cboard.io/');
  }
  checkTitle() {
    var title = browser.getTitle();
    assert.equal(title, 'Cboard - AAC Communication Board');
  }
  isRootBoard() {
    browser.pause(15000);
    const roo = $('h2=home');
    return roo.isDisplayed();
  }
}

export default new RootAppPage();
