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
        return $('//button[@title="Unlock"]');
    }
    get lock() {
        return $('//button[@title="Lock"]');
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
        this.unlock.click();
        this.unlock.click();
        this.unlock.click();
        expect(this.lock.isDisplayed()).to.be.true;
    }
}

export default new RootAppPage();
