var welcomeAppPage = require('../../pages/welcome.app.page');
var rootBoardPage = require('../../pages/root.app.page');
var assert = require('chai').assert;

describe('Welcome page', function() {
     it('should display the valid welcome message', function () {
        welcomeAppPage.open();
        
    });
    it('should successfully login a valid user', function () {
        welcomeAppPage.waitForPage();
        welcomeAppPage.loginUser('anything@cboard.io', '1122');
    });
    it('should reject a login with an invalid user', function () {
        welcomeAppPage.waitForPage();
        
    });
    it('should successfully signup a new valid user', function () {
        welcomeAppPage.waitForPage();
        
    });    
    it('should skip login when user press skip button', function () {
        welcomeAppPage.waitForPage();
        
    });
});