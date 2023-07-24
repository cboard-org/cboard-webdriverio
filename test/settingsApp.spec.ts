import { expect } from 'chai';
import DisplayPage from 'src/pages/DisplayPage';
import SpeechPage from 'src/pages/SpeechPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';
import SymbolsPage from 'src/pages/SymbolsPage';
import ScanningPage from 'src/pages/ScanningPage';
import ImportPage from 'src/pages/ImportPage';
import ExportPage from 'src/pages/ExportPage';
import NavigationPage from 'src/pages/NavigationPage';

describe('Settings options', function () {
    beforeEach(function () {
        browser.reloadSession();
        SettingsAppPage.open();
    });

    afterEach(function () {
    });

    it('should display available languages list', async function () {
        await SettingsAppPage.clickOnLanguage();
        const langs = await SettingsAppPage.getLanguagesList();
        console.log(langs);
        //expect(langs.length).to.be.above(1);
    });
    it('should display available speech settings', function () {
        SettingsAppPage.clickOnSpeech();
        expect(SpeechPage.isDisplayed()).to.be.true
    });
    it('should display available import options', function () {
        SettingsAppPage.clickOnImport();
        expect(ImportPage.isDisplayed()).to.be.true
    });
    it('should display available export options', function () {
        SettingsAppPage.clickOnExport();
        expect(ExportPage.isDisplayed()).to.be.true
    });
    it('should list the display options ', function () {
        SettingsAppPage.clickOnDisplay();
        expect(DisplayPage.isDisplayed()).to.be.true
    });
    it('should display the scanning options', function () {
        SettingsAppPage.clickOnScanning();
        expect(ScanningPage.isDisplayed()).to.be.true
    });
    it('should display the Navigation options', function () {
        SettingsAppPage.clickOnNavigation();
        expect(NavigationPage.isDisplayed()).to.be.true
    });
    it('should display the Symbols options', function () {
        SettingsAppPage.clickOnSymbols();
        expect(SymbolsPage.isDisplayed()).to.be.true
    });
});
