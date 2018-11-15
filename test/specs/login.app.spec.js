var config = require('../../config');
var welcomeAppPage = require('../../pages/welcome.app.page');
var assert = require('assert');

const ELEMENTS = {
    welcomeContainer: '.WelcomeScreen',
    welcomeMessage: '.WelcomeScreen__heading span',
    openLoginButton: '.WelcomeScreen__button--login',
    loginEmailInput: '.Login__form input[name=email]',
    loginPasswordInput: '.Login__form input[name=password]',
    loginSubmitButton: '.Login__form button[type=submit]',
    openSignupButton: '.WelcomeScreen__button--signup',
    signupNameInput: '.SignUp__form input[name=name]',
    signupEmailInput: '.SignUp__form input[name=email]',
    signupPasswordInput: '.SignUp__form input[name=password]',
    signupPasswordConfirmInput: '.SignUp__form input[name=passwordConfirm]',
    signupSubmitInput: '.SignUp__form button[type=submit]',
    signupSuccessMessage: '.SignUp__status--success',
    skipButton: '.WelcomeScreen__button--skip',
};

describe('Welcome page', function() {
    it('should display the valid welcome message', function () {
        welcomeAppPage.waitForPage();    
        assert.equal(browser.getText(ELEMENTS.welcomeMessage), 'Welcome to Cboard');
    });

    it('should successfully login a valid user', function () {
        welcomeAppPage.waitForPage();

        const openLoginButton = browser.element(ELEMENTS.openLoginButton);
        openLoginButton.click();

        const email = browser.element(ELEMENTS.loginEmailInput);
        const password = browser.element(ELEMENTS.loginPasswordInput);
        const loginButton = browser.element(ELEMENTS.loginSubmitButton);

        email.setValue(config.login.username);
        password.setValue(config.login.password);
        loginButton.click();

        browser.pause(5000);
        browser.waitUntil(() => {
            return browser.element(ELEMENTS.welcomeContainer).type === 'NoSuchElement';
        }, 5000, 'Login error - timeout');    
    });

    it('should reject a login with an invalid user', function () {
        welcomeAppPage.waitForPage(true);

        const openLoginButton = browser.element('.WelcomeScreen__button--login');
        openLoginButton.click();

        const email = browser.element(ELEMENTS.loginEmailInput);
        const password = browser.element(ELEMENTS.loginPasswordInput);
        const loginButton = browser.element(ELEMENTS.loginSubmitButton);

        email.setValue('som.eBA+D.EM.AI.L@email.io');
        password.setValue('someBADPASSWORD!$X');
        loginButton.click();

        browser.pause(5000);

        browser.waitUntil(() => {
            return browser.element(ELEMENTS.welcomeContainer).type !== 'NoSuchElement';
        }, 5000, 'Login success :/');
    });
    
    it('should successfully signup a new valid user', function () {
        welcomeAppPage.waitForPage(true);
        const openSignupButton = browser.element(ELEMENTS.openSignupButton);
        openSignupButton.click();
    
        const name = browser.element(ELEMENTS.signupNameInput);
        const email = browser.element(ELEMENTS.signupEmailInput);
        const password = browser.element(ELEMENTS.signupPasswordInput);
        const passwordConfirm = browser.element(ELEMENTS.signupPasswordConfirmInput);
        const signupButton = browser.element(ELEMENTS.signupSubmitInput);
    
        name.setValue('TEST_USER');
        email.setValue(`som.eBA+D.EM.AI.L_${Math.round(Math.random() * 99999999)}@email.io`);
        password.setValue('123456');
        passwordConfirm.setValue('123456');
        signupButton.click();
        
        browser.pause(5000);

        browser.waitUntil(() => {
            return browser.element(ELEMENTS.signupSuccessMessage).type !== 'NoSuchElement';
        }, 5000, 'Signup without success :/');        
    });
   
    it('should skip login when user press skip button', function () {
        welcomeAppPage.waitForPage(true);
        const skipButton = browser.element(ELEMENTS.skipButton);
        skipButton.click();
        browser.waitUntil(() => {
            return browser.element(ELEMENTS.welcomeContainer).type === 'NoSuchElement';
        }, 1000, 'Skip button error');
    });
});