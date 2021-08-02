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
});