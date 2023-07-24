import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';
import SymbolsPage from 'src/pages/SymbolsPage';

describe('Symbols features', function () {
    beforeEach(function () {
        browser.reloadSession();
        SettingsAppPage.open();
        SymbolsPage.open();
    });

    afterEach(function () {
    });

    it('should display the progress bar on download', function () {
        expect(SymbolsPage.progressbarIsDisplayed()).to.be.false;
        SymbolsPage.clickOnDownload();
        SymbolsPage.clickOnDownloadDialog();
        expect(SymbolsPage.progressbarIsDisplayed()).to.be.true;
    });
    // it('should complete the download', function () {
    //     expect(SymbolsPage.progressbarIsDisplayed()).to.be.false;
    //     SymbolsPage.clickOnDownload();
    //     SymbolsPage.clickOnDownloadDialog();
    //     expect(SymbolsPage.progressbarIsDisplayed()).to.be.true;
    //     expect(SymbolsPage.processDoneMsg.waitForDisplayed(180000)).to.be.true
    // });
});
