import SettingsPage from 'src/pages/SettingsAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';

describe('Import board option', function() {
  beforeEach(function() {
      SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });
    it('should import and immediately display the board', function () {
        SettingsAppPage.clickOnImport();
    });
});

describe('Export board option', function() {
    beforeEach(function () {
        SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should download the root board as a cboard json file', function() {
    SettingsPage.clickOnExport();
    //SettingsPage.exportBoard();
  });
});
