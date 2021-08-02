import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

class LanguagesAppPage extends BasePage {
    /**
     * define elements
     */
    get pageH6() {
        return $('h6=Language');
    }
    get languageItemList() {
        return $$('#language-list-item');
    }
    get firstLanguageItem() {
        return $$('#language-list-item')[0];
    }
    get saveButtton() {
        return $('#save-button');
    }
    get backButtton() {
        return $('#back-button');
    }
    get moreLangsButtton() {
        return $('.Settings__Language__MoreLang');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        browser.url('/');
        WelcomeAppPage.loginSkip();
        RootAppPage.unblockSettings();
        RootAppPage.clickOnSetttings();
        SettingsAppPage.clickOnLanguage();
        this.pageH6.waitForDisplayed(4000);
        browser.waitUntil(() => !RootAppPage.isContentCatchMessageDisplayed());
    }

    reload() {
        super.reload();
    }

    clickOnRandomLanguage() {
        const items = this.languageItemList;
        var item = items[Math.floor(Math.random() * items.length)];
        return item.click();
    }

    clickOnFirstLanguage() {
        return this.firstLanguageItem.click();
    }

    clickOnSave() {
        return this.saveButtton.click();
    }

    clickOnBack() {
        return this.backButtton.click();
    }

    clickOnMoreLangs() {
        return this.moreLangsButtton.click();
    }

    getLangs() {
        return this.languageItemList;
    }
}

export default new LanguagesAppPage();
