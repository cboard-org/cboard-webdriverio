import { expect } from 'chai';
import randomstring from 'randomstring';

import CreatePictoAppPage from 'src/pages/CreatePictoAppPage';
import RootAppPage from 'src/pages/RootAppPage';

describe('Create pictograms page', function() {
  beforeEach(function() {
    CreatePictoAppPage.open();
  });

  afterEach(function() {
    browser.reloadSession();
  });

  it('should create a new pictogram and display it in the current board', function() {
    var newLabel = randomstring.generate({
      length: 8,
      charset: 'alphabetic'
    });
    CreatePictoAppPage.createPicto(newLabel, newLabel, 'button');
    expect(RootAppPage.isTileDisplayed(newLabel)).to.be.true;
  });

  it('should create a new folder and display it in the current board', function() {
    var newLabel = randomstring.generate({
      length: 8,
      charset: 'alphabetic'
    });
    CreatePictoAppPage.createPicto(newLabel, newLabel, 'folder');
    expect(RootAppPage.isTileDisplayed(newLabel)).to.be.true;
  });

  it('should create a new pictogram with arasaac image and display it in the current board', function () {
    var newLabel = randomstring.generate({
        length: 8,
        charset: 'alphabetic'
    });
    CreatePictoAppPage.createPicto(newLabel, newLabel, 'button', 'boy');
      //expect(RootAppPage.isTileDisplayed(newLabel, 'boy')).to.be.true;
  });
});
