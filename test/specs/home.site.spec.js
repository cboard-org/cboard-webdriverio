var homePage = require('../../pages/home.site.page');
var assert = require('assert');

describe('cboard.io page', function() {
    it('should have the right title', function () {
        homePage.open();
        var title = browser.getTitle();
        assert.equal(title, 'Home | Cboard - Communication Board');
    });
    it('should open the app', function () {
        homePage.open();
        homePage.clickOnStartCboard();
        var title = browser.getTitle();
        assert.equal(title, 'Cboard - AAC Communication Board');
    });
});



