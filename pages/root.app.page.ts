import { assert } from 'chai';
import { expect } from 'chai';
import Page from 'pages/Page';
import WelcomeAppPage from 'pages/welcome.app.page';

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
  get createTiles() {
    return $('//button[@aria-label="Create tiles"]');
  }
  get tile() {
    return $('//div[@class="Symbol"]');
  }

  get settings() {
    return $('//*[@aria-label="Settings"]');
  }
  get fullScreen() {
    return $('//*[@aria-label="Full screen"]');
  }
  get printBoard() {
    return $('//*[@aria-label="Print Board"]');
  }
  get communicatorBar() {
    return $('.CommunicatorToolbar.Board__communicator-toolbar');
  }
  get boardEditBar() {
    return $('.EditToolbar.Board__edit-toolbar');
  }
  /**
   * define or overwrite page methods
   */
  public open() {
    super.open('https://app.cboard.io/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
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
  clickOnCreateTiles() {
    this.createTiles.click();
  }
  isTileDisplayed(label) {
    return $(
      '//div[@class="Symbol"]//div[text()="' + label + '"]'
    ).isDisplayed();
  }
  isSettingsDisplayed() {
    return this.settings.isDisplayed();
  }
  isFullScreenDisplayed() {
    return this.fullScreen.isDisplayed();
  }
  isPrintBoardisplayed() {
    return this.printBoard.isDisplayed();
  }
  isCommunicatorBarDisplayed() {
    return this.communicatorBar.isDisplayed();
  }
  isBoardEditBarDisplayed() {
    return this.boardEditBar.isDisplayed();
  }
}

export default new RootAppPage();
