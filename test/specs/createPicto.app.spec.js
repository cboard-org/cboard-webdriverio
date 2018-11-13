const rootAppPage = require('../../pages/root.app.page');
const createPictoAppPage = require('../../pages/createPicto.app.page');
const assert = require('assert');

const ELEMENTS = {
    navBarButtons: '.Navbar__group.Navbar__group--end button',
    editToolbarEndButtons: '.EditToolbar__group.EditToolbar__group--end button',
    tileEditorDialogContainer: '.TileEditor__container',
    labelInput: '.TileEditor__container #label',
    folderRadioButton: '.TileEditor__radiogroup > div:not(.ColorSelect) label:last-child input[type=radio]',
    tilePreviewLabel: '.TileEditor__preview .Symbol__label',
    tilePreviewImage: '.TileEditor__preview .Symbol__image-container .Symbol__image',
    backButton: 'div[role=dialog]:first-child header div > button:first-child',
    saveTileButton: 'div[role=dialog] header > div > button:last-child',
    searchPictoButton: 'div[role=dialog] header .FullScreenDialog__buttons button',
    searchPictoInput: 'div[role=dialog] header .FullScreenDialog__buttons input',
    firstSearchPictoOption: '.react-autosuggest__suggestions-container--open ul li:first-child',
    savedTileLabel: '.Board__tiles .react-grid-item:last-child .Symbol__label',
    savedTileFolderLabel: '.Board__tiles .react-grid-item:last-child .Tile--folder .Symbol__label',
};

const testTileEdition = (folder = false, reload = false) => {
    createPictoAppPage.waitForPage(reload);
    const navBarButtons = browser.elements(ELEMENTS.navBarButtons);
    assert.strictEqual(navBarButtons.value.length, 1, 'Is Navbar already unlocked?');
    
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

    const editToolbarEndButtons = browser.elements(ELEMENTS.editToolbarEndButtons);
    assert.ok(editToolbarEndButtons.value.length === 1);

    const addTileButton = browser.element(ELEMENTS.editToolbarEndButtons);
    addTileButton.click();

    assert.notStrictEqual(browser.element(ELEMENTS.tileEditorDialogContainer).type, 'NoSuchElement');

    if (folder) {
        const folderRadioButton = browser.element(ELEMENTS.folderRadioButton);
        folderRadioButton.click();
    }

    assert.strictEqual(browser.element(ELEMENTS.tilePreviewImage).type, 'NoSuchElement');
    
    const searchPictoButton = browser.element(ELEMENTS.searchPictoButton);
    searchPictoButton.click();
    browser.pause(1000);

    const searchPictoInput = browser.element(ELEMENTS.searchPictoInput);
    searchPictoInput.setValue('a');
    browser.pause(1000);

    const firstSearchPictoOption = browser.element(ELEMENTS.firstSearchPictoOption);
    firstSearchPictoOption.click();
    
    assert.notStrictEqual(browser.element(ELEMENTS.tilePreviewImage).type, 'NoSuchElement');
    
    const labelInput = browser.element(ELEMENTS.labelInput);
    const labelForTile = `Some_Label__${Math.round(Math.random() * 999)}`;

    browser.pause(300);
    labelInput.clearElement();
    browser.pause(300);
    labelInput.setValue(labelForTile);

    assert.strictEqual(browser.getText(ELEMENTS.tilePreviewLabel), labelForTile);
    
    const saveTileButton = browser.element(ELEMENTS.saveTileButton);
    saveTileButton.click();
    
    assert.strictEqual(browser.getText(ELEMENTS.savedTileLabel), labelForTile);
    
    if (folder) {
        assert.notStrictEqual(browser.element(ELEMENTS.savedTileFolderLabel).type, 'NoSuchElement');
    }
};

describe('Create pictograms page', function () {
    it('should create a new pictogram and display it in the current board', function () {
        testTileEdition();
    });

    it('should create a new folder and display it in the current board', function () {
        testTileEdition(true);
    });
});