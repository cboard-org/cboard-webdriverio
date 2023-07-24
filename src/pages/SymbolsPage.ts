import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import SettingsAppPage from './SettingsAppPage';

class SymbolsPage extends BasePage {
    /**
     * define elements
     */
    get pageH6() {
        return $('h6=Symbols');
    }
    get downloadARASAACTitle() {
        return $('//*[contains(.,"Download ARASAAC Symbols")]');
    }
    get downloadButton() {
        return $('//button[contains(.,"Download")]');
    }
    get deleteButton() {
        return $('//button[contains(.,"Delete")]');
    }
    get downloaDialog() {
        return $('//*[contains(aria-labelledby,"download-arasaac")]');
    }
    get downloadButtonDialog() {
        return $('//*[contains(aria-labelledby,"download-arasaac")]//button[contains(.,"Download")]');
    }
    get progressBar() {
        return $('//*[contains(role,"progressbar")]');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        SettingsAppPage.clickOnSymbols();
        this.pageH6.waitForDisplayed(4000);
    }

    reload() {
        super.reload();
    }

    clickOnDownload() {
        return this.downloadButton.click();
    }

    clickOnDownloadDialog() {
        return this.downloadButtonDialog.click();
    }

    isDisplayed() {
        return this.pageH6.waitForDisplayed(6000);
    }

    progressbarIsDisplayed() {
        return this.progressBar.isDisplayed();
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
    }}

export default new SymbolsPage();
