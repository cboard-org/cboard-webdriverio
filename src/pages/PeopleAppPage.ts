import { assert } from 'chai';
import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import CreatePictoAppPage from 'src/pages/CreatePictoAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';

class PeopleAppPage extends BasePage {
  /**
   * define elements
   */
   get pageH6() {
    return $('h6=People');
  }
  get saveButtton() {
    return $('#save-button');
  }
  get userName() {
    return $('#user-name');
  }
  get userEmail() {
    return $('#user-email');
  }
  get userBirthday() {
    return $('#user-birthday');
  }
  get userLocation() {
    return $('#user-location');
  }
  get countryCode() {
    return $('div[country-code]')
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
    browser.pause(1500);
    const el = $('//div[@class="Symbol"]//div[text()[contains(.,' + label + ')]]');
    const tileDisplayed = !!el;

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
    browser.pause(1500);
    return !!$(
      '//div[@class="SymbolOutput"]//div[@class="Symbol__label" and text()="' +
      label +
      '"]'
    );
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

  clickOnLoginOrSingUp() {
    return this.loginOrSignUp.click();
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

  skipTour() {
    this.closeTourButton.click();
  }

  async isCachingImagesMsgDisplayed() {
    const el = await this.contentCachedMessage;
    try {
      await el.waitForDisplayed(62000);
      return true;
    } catch (err) {
      return false;
    }
  }

}
export default new PeopleAppPage();
