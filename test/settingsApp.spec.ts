import SettingsPage from 'src/pages/SettingsAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';

describe('Settings options', function () {
    beforeEach(function () {
        browser.reloadSession();
        SettingsAppPage.open();
    });

    afterEach(function () {
    });

    it('should display available languages list', function () {
        SettingsPage.clickOnLanguage();
        //SettingsPage.exportBoard();
    });
    it('should display available speech settings', function () {
        SettingsPage.clickOnSpeech();
        //SettingsPage.exportBoard();
    });
    it('should import and immediately display the board', function () {
        SettingsAppPage.clickOnImport();
    });
    it('should download the root board as a cboard json file', function () {
        SettingsPage.clickOnExport();
        //SettingsPage.exportBoard();
    });
    it('should list the display options ', function () {
        SettingsPage.clickOnDisplay();
        //SettingsPage.exportBoard();
    });
    it('should display the scanning options', function () {
        SettingsPage.clickOnScanning();
        //SettingsPage.exportBoard();
    });
    it('should display the Navigation options', function () {
        SettingsPage.clickOnNavigation();
        //SettingsPage.exportBoard();
    });
});
