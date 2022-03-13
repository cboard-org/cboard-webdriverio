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
    get exportButton() {
        return $('#export-button');
    }
    get exportFormatMenu() {
        return $('//ul[@role="menu"]');
    }
    get closeTourButton() {
        return $('//*[contains(.,"Close Tour")]');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        browser.url('/');
        WelcomeAppPage.loginUser();
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

    exportBoard(format = 'Cboard') {
        this.exportButton.click();
        this.exportFormatMenu.selectByVisibleText(format);
    }

    isDisplayed() {
        return this.pageH6.isDisplayed();
    }

    skipTour() {
      this.closeTourButton.click();
    }
  
}

export default new SettingsAppPage();
