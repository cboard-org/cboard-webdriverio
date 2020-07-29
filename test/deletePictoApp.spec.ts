import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';

describe('Delete pictograms', function () {
  beforeEach(function () {
    browser.reloadSession();
    RootAppPage.open();
    RootAppPage.unblockSettings();
  });

  afterEach(function () {
  });

  it('should delete a button pictogram', function () {
    const label = RootAppPage.deletePicto('');
    expect(RootAppPage.isTileDisplayed(label)).to.be.false;
  });
  it('should delete a folder pictogram', function () {
    const label = RootAppPage.deletePicto('folder');
    expect(RootAppPage.isTileDisplayed(label)).to.be.false;
  });
});
