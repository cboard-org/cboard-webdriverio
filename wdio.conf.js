const timeout = process.env.DEBUG ? 99999999 : 15000;

exports.config = {
    project: 'Cboard',
    build: 'build',
    name: 'name',
    user: process.env.BROWSERSTACK_USERNAME || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',

    specs: [
        './test/**/*.ts'
    ],

    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 5,
    maxInstancesPerCapability: 3,

    capabilities: [{
        browserName: 'chrome',
        'bstack:options': {
            projectName: 'cboard',
            buildName: 'chrome web - ' + process.env.CIRCLE_BUILD_NUM
        }
    },
    {
        browserName: 'chrome',
        'bstack:options': {
            projectName: 'cboard',
            os_version: '10.0',
            device: 'Samsung Galaxy Note 20',
            real_mobile: 'true',
            build: 'android web - ' + process.env.CIRCLE_BUILD_NUM,
        }
    }
        /* {
            os: "OS X",
            os_version: "Big Sur",
            browserName: "Safari",
            browser_version: "14.0",
            browser: 'safari',
            project: 'cboard',
            build: 'safari web - ' + process.env.CIRCLE_BUILD_NUM
        }, {
            os_version: "14",
            device: "iPhone 11",
            real_mobile: "true",
            browserName: "iPhone",
            project: 'cboard',
            build: 'ios web - ' + process.env.CIRCLE_BUILD_NUM
        }], */
    ],

    // Level of logging verbosity: trace | debug | info | warn | error
    logLevel: 'error',

    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,

    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    baseUrl: 'https://app.qa.cboard.io',

    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 90000,

    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,

    //
    // Default request retries count
    connectionRetryCount: 3,

    host: 'hub.browserstack.com',
    services: [["browserstack", {}]],
    framework: 'mocha',

    reporters: [
        'dot',
        'concise',
        ['junit', {
            outputDir: 'test-results',
            outputFileFormat: function (opts) { // optional
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
        }]
    ],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        timeout: 90000,
        compilers: [
            'tsconfig-paths/register'
        ],
        ui: 'bdd'
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test) {
    // },
    // beforeHook: function () {
    // },
    // afterHook: function () {
    // },
    // afterTest: function (test) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // }
    before: function (capabilities, specs) { }
 /**
  * Runs before a WebdriverIO command gets executed.
  * @param {String} commandName hook command name
  * @param {Array} args arguments that command would receive
  */

 /**
  * Hook that gets executed before the suite starts
  * @param {Object} suite suite details
  */
 /**
  * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  * @param {Object} test test details
  */
 /**
  * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  * beforeEach in Mocha)
  */
 /**
  * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  * afterEach in Mocha)
  */
 /**
  * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  * @param {Object} test test details
  */
 /**
  * Hook that gets executed after the suite has ended
  * @param {Object} suite suite details
  */

 /**
  * Runs after a WebdriverIO command gets executed
  * @param {String} commandName hook command name
  * @param {Array} args arguments that command would receive
  * @param {Number} result 0 - command success, 1 - command error
  * @param {Object} error error object if any
  */
 /**
  * Gets executed after all tests are done. You still have access to all global variables from
  * the test.
  * @param {Number} result 0 - test pass, 1 - test fail
  * @param {Array.<Object>} capabilities list of capabilities details
  * @param {Array.<String>} specs List of spec file paths that ran
  */
 /**
  * Gets executed right after terminating the webdriver session.
  * @param {Object} config wdio configuration object
  * @param {Array.<Object>} capabilities list of capabilities details
  * @param {Array.<String>} specs List of spec file paths that ran
  */
 /**
  * Gets executed after all workers got shut down and the process is about to exit.
  * @param {Object} exitCode 0 - success, 1 - fail
  * @param {Object} config wdio configuration object
  * @param {Array.<Object>} capabilities list of capabilities details
  * @param {<Object>} results object containing test results
  */,

    autoCompileOpts: {
        autoCompile: true,

        tsNodeOpts: {
            files: true
        }
    }
}
