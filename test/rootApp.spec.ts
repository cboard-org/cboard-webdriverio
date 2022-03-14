import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';

describe('Root board page', function () {
    beforeEach(function () {
        browser.reloadSession();
        RootAppPage.open();
    });

    afterEach(function () {
    });

    it('should display the valid page title', function () {
        expect(RootAppPage.isRootBoard(), 'Root board not detected').to.be.true;
    });

    it('should display the valid page title after refresh the page', function () {
        expect(RootAppPage.isRootBoard(), 'Root board not detected').to.be.true;
        let page = browser.getUrl();
        browser.url(page);
        expect(RootAppPage.isRootBoard(), 'Root board not detected').to.be.true;
        page = browser.getUrl();
        browser.url(page);
        expect(RootAppPage.isRootBoard(), 'Root board not detected').to.be.true;
    });

    it('should unblock settings after 4 clicks on lock icon', function () {
        RootAppPage.unblockSettings();
        expect(RootAppPage.isSettingsDisplayed()).to.be.true;
    });

    it('should display all icons and bars after unlock', function () {
        RootAppPage.unblockSettings();
        expect(RootAppPage.isSettingsDisplayed()).to.be.true;
        expect(RootAppPage.isShareBoardDisplayed()).to.be.true;
        expect(RootAppPage.isPrintBoardisplayed()).to.be.true;
        expect(RootAppPage.isCommunicatorBarDisplayed()).to.be.true;
        expect(RootAppPage.isBoardEditBarDisplayed()).to.be.true;
    });

    it('should insert pictograms in communication bar when they are clicked', function () {
        var label = RootAppPage.clickOnRandomTileButton();
        expect(
            RootAppPage.isTileDisplayedInCommunicatorBar(label),
            'Tile not added to communication bar'
        ).to.be.true;
    });

    it('should delete pictograms when user clicks on X button', function () {
        RootAppPage.clickOnRandomTileButton();
        RootAppPage.clickOnRandomTileButton();
        RootAppPage.clickOnRandomTileButton();
        RootAppPage.clickOnRandomTileButton();
        expect(RootAppPage.countCommunicatorBarTiles()).to.equal(4);
        RootAppPage.clearCommunicatorBarTiles();
        expect(RootAppPage.countCommunicatorBarTiles()).to.equal(0);
    });

    it('should display help when user clicks on help button', function () {
        browser.pause(4000);
        const help = RootAppPage.getUserHelp();
        expect(help).to.have.string('Cboard is a free web application for children');
        expect(help).to.have.string('This action will delete the board and it cannot be recovered');
    });

    it('should not display help when settings are blocked', function () {
        expect(RootAppPage.isUserHelpButtonDisplayed()).to.be.false;
    });

    it('should display analytics when user clicks on analytics button', function () {
        const analytics = RootAppPage.getAnalytics();
        expect(analytics).to.be.an('array');
        analytics.forEach(value => expect(value).to.eql('0'));
    });

    it('should not display analytics when settings are blocked', function () {
        expect(RootAppPage.isAnalyticsButtonDisplayed()).to.be.false;
    });

    it('should display caching images message on start up', async function () {
        expect(await RootAppPage.isCachingImagesMsgDisplayed()).to.be.true;
    });
});
