import { assert } from 'chai';

import HomePage from 'src/pages/HomeSitePage';

describe('cboard.io page', function() {
  it('should have the right title', function() {
    HomePage.open();
    var title = browser.getTitle();
    assert.equal(title, 'Home | Cboard - Communication Board');
  });

  it('should open the app', function() {
    HomePage.open();
    HomePage.clickOnStartCboard();
    browser.pause(2500);
    var title = browser.getTitle();
    assert.equal(title, 'Cboard - AAC Communication Board');
  });
});
