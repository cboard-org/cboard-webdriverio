var assert = require('chai').assert;
var page = require('./page');

var rootAppPage = Object.create(page, {
    /**
     * define elements
     */
    rootboard: { get: function () { return browser.element('h2=home'); } },

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
            return browser.isVisible('h2=home');
        }
    }
});

module.exports = rootAppPage