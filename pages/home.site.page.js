
var page = require('./page');


var homePage = Object.create(page, {
    /**
     * define elements
     */
    startCboard:      { get: function () { return browser.element('=Start Cboard'); } },
    blog:             { get: function () { return browser.element('=BLOG'); } },
    about:            { get: function () { return browser.element('=ABOUT'); } },
    contact:          { get: function () { return browser.element('=CONTACT'); } },
    help:             { get: function () { return browser.element('=HELP'); } },
    github:           { get: function () { return browser.element('=GITHUB'); } },
 
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/', 'https://www.cboard.io');
    } },

    clickOnStartCboard: { value: function () {
        this.startCboard.click();
    } },

    clickOnBlogMenuItem: { value: function () {
        this.blog.click();
    } },

    clickOnAboutMenuItem: { value: function () {
        this.about.click();
    } },

    clickOnContactMenuItem: { value: function () {
        this.contact.click();
    } },

    clickOnHelpMenuItem: { value: function () {
        this.help.click();
    } },

    clickOnGithubMenuItem: { value: function () {
        this.github.click();
    } }
});

module.exports = homePage