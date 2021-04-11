import { assert } from 'chai';
import { expect } from 'chai';
var rn = require('random-number');

import BasePage from 'src/pages/BasePage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import CreatePictoAppPage from 'src/pages/CreatePictoAppPage';

class RootAppPage extends BasePage {
  /**
   * define elements
   */
  get rootboard() {
    return $('h2=home');
  }
  get unlock() {
    return $('//button[@aria-label="Unlock"]');
  }
  get lock() {
    return $('//button[@aria-label="Lock"]');
  }
  get createTiles() {
    return $('//button[@aria-label="Add Tile"]');
  }
  get tile() {
    return $('//div[@class="Symbol"]');
  }
  get tileButton() {
    return $$('//button[@class="Tile"]');
  }
  get tileFolder() {
    return $$('//button[@class="Tile Tile--folder"]');
  }
  get settings() {
    return $('//*[@aria-label="Settings"]');
  }
  get fullScreen() {
    return $('//*[@aria-label="Full screen"]');
  }
  get communicatorBar() {
    return $('.CommunicatorToolbar.Board__communicator-toolbar');
  }
  get editBoard() {
    return $('//button[@aria-label="edit-board-tiles"]');
  }
  get editSelectedTiles() {
    return $('//button[@aria-label="Edit selected tiles"]');
  }
  get deleteSelectedTiles() {
    return $('//button[@aria-label="Delete selected tiles"]');
  }
  get boardEditBar() {
    return $('.EditToolbar.Board__edit-toolbar');
  }
  get tilesInCommunicator() {
    return $$('div.SymbolOutput__value');
  }
  get clear() {
    return $('//*[@aria-label="Clear"]');
  }
  get printBoard() {
    return $('//*[@aria-label="Print Board"]');
  }
  get shareBoard() {
    return $('//*[@aria-label="Share"]');
  }
  get noSymbol() {
    return $('//*[@id="scannable"]//img[@src="/symbols/mulberry/no.svg"]');
  }
  get contentCachedMessage() {
    return $('//*[contains(.,"Content is cached for offline use")]');
  }
  get symbolOutput() {
    return $('.Scroll__container');
  }
  get userHelp() {
    return $('//*[@href="/settings/help"]');
  }
  get cboardHelpTitle() {
    return $('h1=Cboard Help');
  }
  get cboardHelp() {
    return $('//*[@aria-label="user-help"]');
  }
  get userAnalytics() {
    return $('//a[@href="/analytics"]');
  }
  get cboardAnalyticsTitle() {
    return $('//h6//span[contains(.,"Analytics")]');
  }
  get cboardAnalyticsCardValues() {
    return $$('.StatCards__Card__Items__Text__Value');
  }

  /**
   * define or overwrite page methods
   */
  open() {
    browser.url('/');
    WelcomeAppPage.loginUser();
  }

  checkTitle() {
    var title = browser.getTitle();
    assert.equal(title, 'Cboard - AAC Communication Board');
  }

  isRootBoard() {
    return this.rootboard.waitForDisplayed(5000);
  }

  unblockSettings() {
    if (!this.lock.isDisplayed()) {
      this.noSymbol.waitForDisplayed(10000);
      for (let i = 0; i < 3; i++) {
        this.unlock.click();
        browser.pause(300);
        this.unlock.click();
        browser.pause(300);
        this.unlock.click();
        browser.pause(300);
        this.unlock.click();
        browser.pause(500);
        if (this.lock.isDisplayed()) {
          break;
        }
        browser.pause(3000);
      }
    }
  }

  clickOnCreateTiles() {
    this.createTiles.click();
  }

  clickSymbolOutput() {
    this.symbolOutput.click();
  }

  isSpeaking() {
    return browser.execute(function () {
      return window.speechSynthesis.speaking;
    });
  }

  isTileDisplayed(label, image = '') {
    const el = $('//div[@class="Symbol"]//div[text()[contains(.,' + label + ')]]');
    el.waitForDisplayed(5000);
    const tileDisplayed = el.isDisplayed();

    if (image !== '') {
      const imageDisplayed = $(
        '//div[@class="Symbol"]//img[contains(@src,"' + image + '")]'
      ).isDisplayed();
      return tileDisplayed && imageDisplayed;
    } else {
      return tileDisplayed;
    }
  }

  isSettingsDisplayed() {
    return this.settings.isDisplayed();
  }

  isFullScreenDisplayed() {
    return this.fullScreen.isDisplayed();
  }

  isShareBoardDisplayed() {
    return this.shareBoard.isDisplayed();
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

  isTileDisplayedInCommunicatorBar(label) {
    return $(
      '//div[@class="SymbolOutput"]//div[@class="Symbol__label" and text()="' +
      label +
      '"]'
    ).isDisplayed();
  }

  clickOnRandomTileButton() {
    this.tile.waitForDisplayed(4000);
    var length = this.tileButton.length;
    var options = {
      min: 0,
      max: length - 1,
      integer: true
    };
    var index = rn(options);
    const label = this.tileButton[index].getText();
    this.tileButton[index].click();
    return label;
  }

  clickOnRandomTileFolder() {
    this.tile.waitForDisplayed(4000);
    var length = this.tileFolder.length;
    var options = {
      min: 0,
      max: length - 1,
      integer: true
    };
    var index = rn(options);
    const label = $$('//button[@class="Tile Tile--folder"]')[index].getText();
    $$('//button[@class="Tile Tile--folder"]')[index].click();
    return label;
  }

  editPicto(property, type = 'button') {
    this.editBoard.click();
    let label = '';
    if (type === 'folder') {
      label = this.clickOnRandomTileFolder();
    } else {
      label = this.clickOnRandomTileButton();
    }
    this.editSelectedTiles.click();
    if (property === 'color') {
      CreatePictoAppPage.clickOnRandomColor();
    } else if (property === 'label') {
      label = CreatePictoAppPage.updateLabel();
    } else if (property === 'vocaliztion') {
      label = CreatePictoAppPage.updateVocalization();
    }
    CreatePictoAppPage.saveButton.click();
    browser.pause(1000);
    return label;
  }

  deletePicto(type = 'button') {
    this.editBoard.click();
    let label;
    if (type === 'folder') {
      label = this.clickOnRandomTileFolder();
    } else {
      label = this.clickOnRandomTileButton();
    }
    this.deleteSelectedTiles.click();
    return label;
  }

  countCommunicatorBarTiles() {
    return this.tilesInCommunicator.length;
  }

  clearCommunicatorBarTiles() {
    return this.clear.click();
  }

  clickOnSetttings() {
    return this.settings.click();
  }

  isContentCatchMessageDisplayed() {
    return this.contentCachedMessage.isDisplayed();
  }

  isUserHelpButtonDisplayed() {
    return this.userHelp.isDisplayed();
  }

  getUserHelp() {
    this.unblockSettings();
    this.userHelp.click();
    this.cboardHelpTitle.waitForDisplayed(6000);
    return this.cboardHelp.getText();
  }

  isAnalyticsButtonDisplayed() {
    return this.userAnalytics.isDisplayed();
  }

  getAnalytics() {
    this.unblockSettings();
    this.userAnalytics.click();
    this.cboardAnalyticsTitle.waitForDisplayed(3000);
    browser.pause(10000);
    return this.cboardAnalyticsCardValues.map(val => val.getText());
  }

}
export default new RootAppPage();
