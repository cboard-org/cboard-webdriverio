import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

class SettingsAppPage extends BasePage {
    /**
     * define elements
     */
    get pageH6() {
        return $('h6=Settings');
    }
    get language() {
        return $('//a[@href="/settings/language"]');
    }
    get speech() {
        return $('//a[@href="/settings/speech"]');
    }
    get export() {
        return $('//a[@href="/settings/export"]');
    }
    get import() {
        return $('//a[@href="/settings/import"]');
    }
    get display() {
        return $('//a[@href="/settings/display"]');
    }
    get scanning() {
        return $('//a[@href="/settings/scanning"]');
    }
    get navigation() {
        return $('//a[@href="/settings/navigation"]');
    }
    get symbols() {
        return $('//a[@href="/settings/symbols"]');
    }
    get exportButton() {
        return $('#export-button');
    }
    get exportFormatMenu() {
        return $('//ul[@role="menu"]');
    }
    get closeTourButton() {
        return $('//button[contains(.,"Close Tour")]');
    }
    get languagesList() {
        return $('ul.MuiList-root');
    }
    get languageEl() {
        return $$('ul div.MuiButtonBase-root');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        browser.url('/');
        WelcomeAppPage.loginSkip();
        RootAppPage.skipTour();
        RootAppPage.unblockSettings();
        RootAppPage.clickOnSetttings();
        this.skipTour();
        this.pageH6.waitForDisplayed(4000);
        browser.waitUntil(() => !RootAppPage.isContentCatchMessageDisplayed());
    }

    reload() {
        super.reload();
    }

    clickOnLanguage() {
        return this.language.click();
    }

    clickOnSpeech() {
        return this.speech.click();
    }
    clickOnExport() {
        return this.export.click();
    }

    clickOnImport() {
        return this.import.click();
    }
    clickOnDisplay() {
        return this.display.click();
    }
    clickOnNavigation() {
        this.navigation.waitForDisplayed(6000);
        return this.navigation.click();
    }
    clickOnScanning() {
        return this.scanning.click();
    }
    clickOnSymbols() {
        return this.symbols.click();
    }

    exportBoard(format = 'Cboard') {
        this.exportButton.click();
        this.exportFormatMenu.selectByVisibleText(format);
    }

    isDisplayed() {
        return this.pageH6.isDisplayed();
    }

    skipTour() {
        browser.pause(2000);
        if (this.closeTourButton.isDisplayed()) {
            this.closeTourButton.click();
        }
        browser.pause(2000);
        if (this.closeTourButton.isDisplayed()) {
            this.closeTourButton.click();
        }
        browser.pause(2000);
    }
    async getLanguagesList() {
        const elems = await this.language;
        const langs: string[] = [];
        for (var i = 0; i < elems.length; i++) {
            langs.push(elems[i].$('div div span').getText());
        }
        return langs;
    }
}

export default new SettingsAppPage();
