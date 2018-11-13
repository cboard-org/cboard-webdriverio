
var page = require('./page');

var rootBoardPage = require('./root.app.page');

var welcomeAppPage = Object.create(page, {
    /**
     * define elements
     */
    login:      { get: function () { return browser.element('button=Login'); } },
    signup:     { get: function () { return browser.element('button=SIGN UP'); } },
    skip:       { get: function () { return browser.element('=SKIP FOR NOW'); } },
    title:      { get: function () { return browser.element('=CONTACT'); } },
    logo:       { get: function () { return browser.element('=HELP'); } },
    mission:    { get: function () { return browser.element('=GITHUB'); } },
    usernameInput: { get: function () { return browser.element('//*[@name="email"]'); } },
    passwordInput: { get: function () { return browser.element('//*[@name="password"]'); } },
    loginButton: { get: function () { return browser.element('//button[@type="submit"]'); } },
 
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, 'https://app.cboard.io/');
    } },

    loginUser: {
        value: function (username, password) {
            this.login.click();
            this.usernameInput.setValue(username);
            this.passwordInput.setValue(password);
            this.loginButton.click();
            browser.waitUntil(rootBoardPage.isRootBoard, 20000, "");
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