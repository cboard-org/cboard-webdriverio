import SettingsPage from 'src/pages/SettingsAppPage';
import RootAppPage from 'src/pages/RootAppPage';
import SettingsAppPage from 'src/pages/SettingsAppPage';

describe('Language option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should display available languages list', function() {
    SettingsPage.clickOnLanguage();
    //SettingsPage.exportBoard();
  });
});

describe('Speech option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should display available speech settings', function() {
    SettingsPage.clickOnSpeech();
    //SettingsPage.exportBoard();
  });
});

describe('Import board option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });
  it('should import and immediately display the board', function() {
    SettingsAppPage.clickOnImport();
  });
});

describe('Export board option', function() {
  beforeEach(function() {
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

describe('Display option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should list the display options ', function() {
    SettingsPage.clickOnDisplay();
    //SettingsPage.exportBoard();
  });
});

describe('Scanning option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should display the scanning options', function() {
    SettingsPage.clickOnScanning();
    //SettingsPage.exportBoard();
  });
});

describe('Navigation option', function() {
  beforeEach(function() {
    SettingsAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should display the Navigation options', function() {
    SettingsPage.clickOnNavigation();
    //SettingsPage.exportBoard();
  });
});
