import { assert } from 'chai';
import { expect } from 'chai';
var rn = require('random-number');

import BasePage from 'src/pages/BasePage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

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
    get settings() {
        return $('//*[@aria-label="Settings"]');
    }
    get fullScreen() {
        return $('//*[@aria-label="Full screen"]');
    }
    get communicatorBar() {
        return $('.CommunicatorToolbar.Board__communicator-toolbar');
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

    get contentCachedMessage() {
        return $('//*[contains(.,"Content is cached for offline use")]');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        browser.url('/');
        WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    }

    checkTitle() {
        var title = browser.getTitle();
        assert.equal(title, 'Cboard - AAC Communication Board');
    }

    isRootBoard() {
        return this.rootboard.waitForDisplayed(5000);
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

    isTileDisplayed(label, image = '') {
        const tileDisplayed = $(
            '//div[@class="Symbol"]//div[text()="' + label + '"]'
        ).isDisplayed();

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
        $$('//button[@class="Tile"]')[index].click();
        return $$('//button[@class="Tile"]')[index].getText();
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
}
export default new RootAppPage();
