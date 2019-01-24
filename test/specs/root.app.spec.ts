import RootAppPage from 'pages/root.app.page';
import { expect } from 'chai';

describe('Root board page', function() {
  beforeEach(function() {
    RootAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });
  it('should display the valid page title', function() {
    RootAppPage.open();
  });
  it('should unblock settings after 4 clicks on lock icon', function() {
    RootAppPage.unblockSettings();
    expect(RootAppPage.isSettingsDisplayed()).to.be.true;
  });
  it('should display all icons and bars after unlock', function() {
    RootAppPage.unblockSettings();
    expect(RootAppPage.isSettingsDisplayed()).to.be.true;
    expect(RootAppPage.isFullScreenDisplayed()).to.be.true;
    expect(RootAppPage.isPrintBoardisplayed()).to.be.true;
    expect(RootAppPage.isCommunicatorBarDisplayed()).to.be.true;
    expect(RootAppPage.isBoardEditBarDisplayed()).to.be.true;
  });
  it('should insert pictograms in communication bar when they are clicked', function() {});
  it('should delete pictograms when user clicks on X button', function() {});
});
