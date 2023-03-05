import { expect } from 'chai';

import SettingsPage from 'src/pages/SettingsAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import LanguagesAppPage from 'src/pages/LanguagesAppPage';

describe('Languages functionality', function () {
    beforeEach(function () {
        browser.reloadSession();
        LanguagesAppPage.open();
    });

    afterEach(function () {
    });

    it('should display available languages list', function () {
        expect(LanguagesAppPage.getLangs()).to.not.be.empty;
    });
    it('should change to any language from the languages list', function () {
        LanguagesAppPage.clickOnRandomLanguage();
        LanguagesAppPage.clickOnSave();
        expect(SettingsPage.isDisplayed()).to.be.false;
    });
    it('should change to english language', function () {
        LanguagesAppPage.clickOnLanguage('Spanish');
        LanguagesAppPage.clickOnSave();
        SettingsPage.clickOnLanguage();
        LanguagesAppPage.clickOnLanguage('Inglés');
        LanguagesAppPage.clickOnSave();
        SettingsPage.clickOnLanguage();
        LanguagesAppPage.clickOnLanguage('English');
    });
    it('should change to french language', function () {
        LanguagesAppPage.clickOnLanguage('French');
        LanguagesAppPage.clickOnSave();
        SettingsPage.clickOnLanguage();
        LanguagesAppPage.clickOnLanguage('Espagnol');
        LanguagesAppPage.clickOnSave();
    });
});