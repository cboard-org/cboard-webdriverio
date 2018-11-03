var welcomeAppPage = require('../../pages/welcome.app.page');
var assert = require('assert');

describe('Welcome page', function() {
     it('should display the valid welcome message', function () {
        welcomeAppPage.open();
        
    });
    it('should successfully login a valid user', function () {
        welcomeAppPage.open();
        
    });
    it('should reject a login with an invalid user', function () {
        welcomeAppPage.open();
        
    });
    it('should successfully signup a new valid user', function () {
        welcomeAppPage.open();
        
    });    
    it('should skip login when user press skip button', function () {
        welcomeAppPage.open();
        
    });
});