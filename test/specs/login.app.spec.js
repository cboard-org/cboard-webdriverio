var welcomeAppPage = require('../../pages/welcome.app.page');
var rootBoardPage = require('../../pages/root.app.page');
var assert = require('chai').assert;
var randomstring = require('randomstring');

describe('Welcome page', function() {
    
    beforeEach( function () {
        welcomeAppPage.open();
    });
    
    afterEach( function () {
        browser.reloadSession();
    });
    
    it('should successfully login a valid user', function () {
        welcomeAppPage.loginUser('anything@cboard.io', '1122');
    });
    
    it('should reject a login with an invalid user', function () {
        welcomeAppPage.loginUser('nothing@cboard.io', '1122', true );
    });
    
    it('should skip login when user presses on skip button', function () {
        welcomeAppPage.loginSkip();
    });
    
    it('should successfully signup a valid user', function () {
        var newUser = randomstring.generate({
            length: 16,
            charset: 'alphabetic'
        }) + '@cboard.io';
        welcomeAppPage.signupUser(newUser, '1122');
    });
});
