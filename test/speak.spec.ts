import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';

describe('App can speak and', function () {
    before(function () {
        if (browser.capabilities.platformName === 'Android') {
            this.skip();
        }
    });

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
        //browser.waitUntil(() => RootAppPage.isSpeaking() === false, 10000);
    });
    it('should sound when output bar is clicked', function () {
        RootAppPage.clickOnRandomTileButton();
        browser.waitUntil(() => RootAppPage.isSpeaking() === false, 10000);
        RootAppPage.clickSymbolOutput();
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.true;
        //browser.waitUntil(() => RootAppPage.isSpeaking() === false, 10000);
    });
    it('should not sound when a tile folder is clicked', function () {
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
        RootAppPage.clickOnRandomTileFolder();
        expect(RootAppPage.isSpeaking(), 'Speaking detected').to.be.false;
    });
});
