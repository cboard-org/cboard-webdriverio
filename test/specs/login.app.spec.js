var welcomeAppPage = require('../../pages/welcome.app.page');
var rootBoardPage = require('../../pages/root.app.page');
var assert = require('chai').assert;

describe('Welcome page', function() {
    before( function () {
        welcomeAppPage.open();
    });
    it('should successfully login a valid user', function () {
        welcomeAppPage.loginUser('anything@cboard.io', '1122');
    });
});