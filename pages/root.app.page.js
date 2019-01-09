var assert = require('chai').assert;
var page = require('./page');

var rootAppPage = Object.create(page, {
    /**
     * define elements
     */
    rootboard: { get: function () { return $('=home'); } },

    /**
     * define or overwrite page methods
     */
    checkTitle: {
        value: function () {
        var title = browser.getTitle();
        assert.equal(title, 'Cboard - AAC Communication Board');
        }
    },

    isRootBoard: {
        value: function () {
            browser.pause(15000);
           const roo =  $('h2=home'); 
            return roo.isDisplayed();
        }
    }
});

module.exports = rootAppPage