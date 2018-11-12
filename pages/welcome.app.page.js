
var page = require('./page');


var welcomeAppPage = Object.create(page, {
    /**
     * define elements
     */
    login:      { get: function () { return browser.element('=LOGIN'); } },
    signup:     { get: function () { return browser.element('=SIGN UP'); } },
    skip:       { get: function () { return browser.element('=SKIP FOR NOW'); } },
    title:      { get: function () { return browser.element('=CONTACT'); } },
    logo:       { get: function () { return browser.element('=HELP'); } },
    mission:    { get: function () { return browser.element('=GITHUB'); } },
 
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } },

    loginUser: { value: function () {
        this.login.click();
    } },

    signupUser: { value: function () {
        this.signup.click();
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

module.exports = welcomeAppPage