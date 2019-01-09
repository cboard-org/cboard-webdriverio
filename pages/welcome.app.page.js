var assert = require('chai').assert;
var page = require('./page');

var rootBoardPage = require('./root.app.page');

var welcomeAppPage = Object.create(page, {
    /**
     * define elements
     */
    login:        { get: function () { return $('button=Login'); } },
    signup:     { get: function () { return $('button=SIGN UP'); } },
    skip:       { get: function () { return $('=SKIP FOR NOW'); } },
    title:      { get: function () { return $('=CONTACT'); } },
    logo:       { get: function () { return $('=HELP'); } },
    mission:    { get: function () { return $('=GITHUB'); } },
    usernameInput: { get: function () { return $('//*[@name="email"]'); } },
    passwordInput: { get: function () { return $('//*[@name="password"]'); } },
    loginButton: { get: function () { return $('//button[@type="submit"]'); } },
 
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'https://app.cboard.io/');
    } },

    reload: { value: function() {
        page.reload.call(this);
    } },
    loginUser: {
        value: function (username, password) {
            this.login.click();
            this.usernameInput.setValue(username);
            this.passwordInput.setValue(password);
            this.loginButton.click();
            rootBoardPage.checkTitle();
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