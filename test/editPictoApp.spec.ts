import { expect } from 'chai';

import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

describe('Edit pictograms page', function () {
  beforeEach(function () {
    //browser.reloadSession();
    RootAppPage.open();
    RootAppPage.unblockSettings();
  });

  afterEach(function () {
  });

  it('should edit a button pictogram', function () {
    const label = RootAppPage.editPicto('');
    expect(RootAppPage.isTileDisplayed(label)).to.be.true;
  });
  it('should edit a folder pictogram', function () {
    const label = RootAppPage.editPicto('','folder');
    expect(RootAppPage.isTileDisplayed(label)).to.be.true;
  });
  it('should edit a pictogram to simply update color', function () {
    const label = RootAppPage.editPicto('color');
    expect(RootAppPage.isTileDisplayed(label)).to.be.true;
  });
  it('should edit a pictogram to update label', function () {
    const label = RootAppPage.editPicto('label');
    expect(RootAppPage.isTileDisplayed(label)).to.be.true;
  });
  it('should edit a pictogram to simply update vocalization', function () {
    const label = RootAppPage.editPicto('vocalization');
    expect(RootAppPage.isTileDisplayed(label)).to.be.true;
  });

});
