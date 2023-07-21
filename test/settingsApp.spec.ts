import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';
import SymbolsPage from 'src/pages/SymbolsPage';

describe('Settings options', function () {
    beforeEach(function () {
        browser.reloadSession();
        SettingsAppPage.open();
    });

    afterEach(function () {
    });

    it('should display available languages list', async function () {
        SettingsAppPage.clickOnLanguage();
        const langs = await SettingsAppPage.getLanguagesList();
        expect(langs.length).to.be.above(1);
    });
    it('should display available speech settings', function () {
        SettingsAppPage.clickOnSpeech();
        //SettingsAppPage.exportBoard();
    });
    it('should import and immediately display the board', function () {
        SettingsAppPage.clickOnImport();
    });
    it('should download the root board as a cboard json file', function () {
        SettingsAppPage.clickOnExport();
        //SettingsAppPage.exportBoard();
    });
    it('should list the display options ', function () {
        SettingsAppPage.clickOnDisplay();
        //SettingsAppPage.exportBoard();
    });
    it('should display the scanning options', function () {
        SettingsAppPage.clickOnScanning();
        //SettingsAppPage.exportBoard();
    });
    it('should display the Navigation options', function () {
        SettingsAppPage.clickOnNavigation();
        //SettingsAppPage.exportBoard();
    });
    it('should display the Symbols options', function () {
        SettingsAppPage.clickOnSymbols();
        expect(SymbolsPage.isDisplayed()).to.be.true
    });
});
