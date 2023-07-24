import { expect } from 'chai';

import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';
import SettingsAppPage from './SettingsAppPage';

class ScanningPage extends BasePage {
    /**
     * define elements
     */
    get pageH6() {
        return $('h6=Scanning');
    }

    /**
     * define or overwrite page methods
     */
    open() {
        SettingsAppPage.clickOnScanning();
        this.pageH6.waitForDisplayed(4000);
    }

    reload() {
        super.reload();
    }

    isDisplayed() {
        return this.pageH6.waitForDisplayed(6000);
    }
}

export default new ScanningPage();
