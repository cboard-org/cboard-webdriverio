import CreatePictoAppPage from 'pages/create-picto.app.page';
import { expect } from 'chai';
import randomstring from 'randomstring';

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
  });
  it('should create a new folder and display it in the current board', function() {
    var newLabel = randomstring.generate({
      length: 8,
      charset: 'alphabetic'
    });
    CreatePictoAppPage.createPicto(newLabel, newLabel, 'folder');
  });
});
