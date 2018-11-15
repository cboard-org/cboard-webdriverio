const rootAppPage = require('../../pages/root.app.page');
const assert = require('assert');

const ELEMENTS = {
    navBarButtons: '.Navbar__group.Navbar__group--end button',
    navBarIcons: '.Navbar__group.Navbar__group--end > *',
    settingsButton: '.Navbar__group.Navbar__group--end a[href="/settings"]',
    communicatorToolbar: '.CommunicatorToolbar',
    communicatorToolbarTitle: '.CommunicatorToolbar .Communicator__title',
    communicatorToolbarButtons: '.CommunicatorToolbar button',
    editToolbar: '.EditToolbar',
    editToolbarTitle: '.EditToolbar .EditToolbar__BoardTitle',
    editToolbarButtons: '.EditToolbar button',
    editToolbarDeleteButton: '.EditToolbar__group.EditToolbar__group--end button:first-child',
    editToolbarDashboardButton: '.EditToolbar .EditToolbar__group--start button:first-child',
    editToolbarSelectedCounter: '.EditToolbar .SelectedCounter',
    firstTileButton: '.Board__tiles .react-grid-item:first-child button',
    firstTileButtonLabel: '.Board__tiles .react-grid-item:first-child button .Symbol__label',
};

describe('Root board page', function() {
     it('should display the valid page title', function () {
        rootAppPage.waitForPage();
        assert.equal(browser.getTitle(), 'Cboard - AAC Communication Board');
    });

    it('should unblock settings after 4 clicks on lock icon', function () {
        const navBarButtons = browser.elements(ELEMENTS.navBarButtons);
        assert.strictEqual(navBarButtons.value.length, 1, 'Is Navbar already unlocked?');

        assert.strictEqual(browser.element(ELEMENTS.settingsButton).type, 'NoSuchElement');
        assert.ok(!browser.isVisible(ELEMENTS.communicatorToolbar));
        assert.ok(!browser.isVisible(ELEMENTS.editToolbar));

        const unlockButton = browser.element(ELEMENTS.navBarButtons);        

        // #1
        unlockButton.click();
        assert.strictEqual(browser.elements(ELEMENTS.navBarButtons).value.length, 1, 'Is Navbar already unlocked?');
        // #2
        unlockButton.click();
        assert.strictEqual(browser.elements(ELEMENTS.navBarButtons).value.length, 1, 'Is Navbar already unlocked?');
        // #3
        unlockButton.click();
        assert.strictEqual(browser.elements(ELEMENTS.navBarButtons).value.length, 1, 'Is Navbar already unlocked?');
        // #4
        unlockButton.click();
        assert.ok(browser.elements(ELEMENTS.navBarButtons).value.length > 1, 'Is Navbar locked?');

        assert.notStrictEqual(browser.element(ELEMENTS.settingsButton).type, 'NoSuchElement');
    });

    it('should display all icons and bars after unlock', function () {
        assert.ok(browser.isVisible(ELEMENTS.communicatorToolbar));
        assert.ok(browser.isVisible(ELEMENTS.editToolbar));

        assert.ok(browser.isVisible(ELEMENTS.communicatorToolbarTitle));
        assert.ok(browser.isVisible(ELEMENTS.editToolbarTitle));
        
        assert.strictEqual(browser.elements(ELEMENTS.communicatorToolbarButtons).value.length, 2);
        assert.strictEqual(browser.elements(ELEMENTS.editToolbarButtons).value.length, 2);
        
        assert.strictEqual(browser.element(ELEMENTS.editToolbarSelectedCounter).type, 'NoSuchElement');
        const editToolbarDashboardButton = browser.element(ELEMENTS.editToolbarDashboardButton);
        editToolbarDashboardButton.click();
        assert.notStrictEqual(browser.element(ELEMENTS.editToolbarSelectedCounter).type, 'NoSuchElement');
    });
    
    it('should insert pictograms in communication bar when they are clicked', function () {
        assert.strictEqual(browser.getText(ELEMENTS.editToolbarSelectedCounter), '0 items');
        const firstTileButton = browser.element(ELEMENTS.firstTileButton);
        firstTileButton.click();
        assert.strictEqual(browser.getText(ELEMENTS.editToolbarSelectedCounter), '1 items');
    });
    
    it('should delete pictograms when user clicks on X button', function () {
        const firstTileButtonLabel = browser.getText(ELEMENTS.firstTileButtonLabel);

        assert.ok(browser.isEnabled(ELEMENTS.editToolbarDeleteButton));
        const editToolbarDeleteButton = browser.element(ELEMENTS.editToolbarDeleteButton);
        editToolbarDeleteButton.click();

        const newTileButtonLabel = browser.getText(ELEMENTS.firstTileButtonLabel);

        assert.ok(firstTileButtonLabel !== newTileButtonLabel);
        assert.ok(!browser.isEnabled(ELEMENTS.editToolbarDeleteButton));
    });
});