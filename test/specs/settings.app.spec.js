const path = require('path');
const fs = require('fs');
const settingAppPage = require('../../pages/settings.app.page');
const assert = require('assert');

const ELEMENTS = {
    navBarButtons: '.Navbar__group.Navbar__group--end button',
    navBarTitle: '.Navbar .Navbar__title',
    editBarTitle: '.EditToolbar__BoardTitle',
    settingsButton: '.Navbar__group.Navbar__group--end a[href="/settings"]',
    importSettingsButton: 'div[role=dialog] a[href="/settings/import"]',
    exportSettingsButton: 'div[role=dialog] a[href="/settings/export"]',
    restoreButton: '.Import__ButtonContainer input[type=file]',
    restoreNotification: 'div[role=alertdialog] span#message-id',
    importDialogBackButton: 'div[role=dialog]:last-child header button',
    settingsDialogBackButton: 'div[role=dialog] header button',
    printButton: '.Navbar__group.Navbar__group--end > div:first-child > button',
    printDialogContainer: '.PrintBoardDialog__container',
    printCurrentBoardButton: '.PrintBoardDialog__container button:first-child',
    exportMenuButton: '.Export__ButtonContainer button',
    exportCboardButton: '#export-menu li:nth-child(1)',
    exportOpenBoardButton: '#export-menu li:nth-child(2)',
    exportPDFButton: '#export-menu li:nth-child(3)',
    skipButton: '.WelcomeScreen__button--skip',
};

const unlockSettings = (clickSettings = true) => {
    const skipButton = browser.element(ELEMENTS.skipButton);
    if (!skipButton.type || skipButton.type !== 'NoSuchElement') {
        skipButton.click();
        browser.pause(100);
    }

    const unlockButton = browser.element(ELEMENTS.navBarButtons);      
    unlockButton.click();
    unlockButton.click();
    unlockButton.click();
    unlockButton.click();
    
    if (clickSettings) {
        const settingsButton = browser.element(ELEMENTS.settingsButton);
        settingsButton.click();
        browser.pause(500);
    }
};

const extensionExists = (extension = 'json', deleteFile = false) => {
    let returnValue = false;
    const files = fs.readdirSync(global.downloadDir);
    for (let i=0; i < files.length; i++) {
        const filename = path.join(global.downloadDir, files[i]);
        const stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            continue;
        } else if (filename.indexOf(extension) >= 0) {
            if (deleteFile) {
                fs.unlinkSync(filename);
            }
            returnValue = true;
            break;
        };
    }

    return returnValue;
};

describe('Import board option', function() {
    it('should import and immediately display the board', function () {
        settingAppPage.waitForPage();
        unlockSettings(false);

        const boardTitle = browser.getText(ELEMENTS.editBarTitle);
        const settingsButton = browser.element(ELEMENTS.settingsButton);
        settingsButton.click();
        browser.pause(500);

        const importSettingsButton = browser.element(ELEMENTS.importSettingsButton);
        importSettingsButton.click();
        
        const pathToOBZ = path.join(__dirname, '..', '..', 'static', 'simple.obz')
        browser.chooseFile(ELEMENTS.restoreButton, pathToOBZ);
        
        browser.waitUntil(() => {
            return browser.element(ELEMENTS.restoreNotification).type !== 'NoSuchElement';
        }, 15000, 'Missing restore notification');
        
        const importDialogBackButton = browser.element(ELEMENTS.importDialogBackButton);
        importDialogBackButton.click();
        browser.pause(100);
        
        const settingsDialogBackButton = browser.element(ELEMENTS.settingsDialogBackButton);
        settingsDialogBackButton.click();
        browser.pause(100);

        const newBoardTitle = browser.getText(ELEMENTS.navBarTitle);

        assert.ok(boardTitle !== newBoardTitle);
    });
});

describe('Export board option', function () {
    it('should print the root board as a PDF file', function () {
        settingAppPage.waitForPage();
        unlockSettings(false);

        const printButton = browser.element(ELEMENTS.printButton);
        printButton.click();
        assert.notStrictEqual(browser.element(ELEMENTS.printDialogContainer).type, 'NoSuchElement');
        
        const printCurrentBoardButton = browser.element(ELEMENTS.printCurrentBoardButton);
        printCurrentBoardButton.click();

        browser.waitUntil(() => extensionExists('pdf', true), 30000, 'Not downloaded?');
    });

    it('should download the root board as a cboard json file', function () {
        settingAppPage.waitForPage();
        unlockSettings();
        const exportSettingsButton = browser.element(ELEMENTS.exportSettingsButton);
        exportSettingsButton.click();
        browser.pause(500);

        const exportMenuButton = browser.element(ELEMENTS.exportMenuButton);
        exportMenuButton.click();
        browser.pause(500);

        const exportCboardButton = browser.element(ELEMENTS.exportCboardButton);
        exportCboardButton.click();

        browser.waitUntil(() => extensionExists('json'), 30000, 'Not downloaded?');
    });
    
    it('should download the root board as OBZ file', function () {
        settingAppPage.waitForPage();
        unlockSettings();
        const exportSettingsButton = browser.element(ELEMENTS.exportSettingsButton);
        exportSettingsButton.click();
        browser.pause(500);

        const exportMenuButton = browser.element(ELEMENTS.exportMenuButton);
        exportMenuButton.click();
        browser.pause(500);

        const exportOpenBoardButton = browser.element(ELEMENTS.exportOpenBoardButton);
        exportOpenBoardButton.click();

        browser.waitUntil(() => extensionExists('obz'), 90000, 'Not downloaded?');
    });

    it('should download the root board as PDF file', function () {
        settingAppPage.waitForPage();
        unlockSettings();
        const exportSettingsButton = browser.element(ELEMENTS.exportSettingsButton);
        exportSettingsButton.click();
        browser.pause(500);

        const exportMenuButton = browser.element(ELEMENTS.exportMenuButton);
        exportMenuButton.click();
        browser.pause(500);

        const exportPDFButton = browser.element(ELEMENTS.exportPDFButton);
        exportPDFButton.click();

        browser.waitUntil(() => extensionExists('pdf'), 120000, 'Not downloaded?');
    });
});


