import { assert } from 'chai';
import { expect } from 'chai';
import Page from 'pages/Page';

class RootAppPage extends Page {
  /**
   * define elements
   */
  get rootboard() {
    return $('=home');
  }
  get unlock() {
    return $('//button[@aria-label="Unlock"]');
  }
  get lock() {
    return $('//button[@aria-label="Lock"]');
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
    const roo = $('h2=home');
    return roo.isDisplayed();
  }
  unblockSettings() {
    expect(this.lock.isDisplayed()).to.be.false;
    this.unlock.click();
    browser.pause(600);
    this.unlock.click();
    browser.pause(600);
    this.unlock.click();
    browser.pause(600);
    this.unlock.click();
    browser.pause(600);
    expect(this.lock.isDisplayed()).to.be.true;
  }
}

export default new RootAppPage();
