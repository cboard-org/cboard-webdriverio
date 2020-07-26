import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

describe('Edit pictograms page', function () {
  beforeEach(function () {
    browser.reloadSession();
    RootAppPage.open();
    RootAppPage.unblockSettings();
  });

  afterEach(function () {
  });

  it('should edit a pictogram to simply update color', function () {
    var tile = { label: 'yes', color: 'red' };
    RootAppPage.editPicto(tile);
    expect(RootAppPage.isTileDisplayed(tile.label)).to.be.true;
  });

});
