import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';

describe('App can speak and', function () {
    beforeEach(function () {
        browser.reloadSession();
        RootAppPage.open();
    });

    afterEach(function () {
    });

    it('should sound when a tile buttton is clicked', function () {
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
        RootAppPage.clickOnRandomTileButton();
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.true;
        browser.pause(5000);
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
    });
    it('should sound when output bar is clicked', function () {
        RootAppPage.clickOnRandomTileButton();
        browser.pause(5000);
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
        RootAppPage.clickSymbolOutput();
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.true;
        browser.pause(5000);
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
    });
    it('should not sound when a tile buttton is clicked', function () {
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
        RootAppPage.clickOnRandomTileFolder();
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
    });
});
