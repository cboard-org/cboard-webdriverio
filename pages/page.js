require('dotenv').config();

function Page() {
}


Page.prototype.open = function (path) {
    browser.url(path);
}

Page.prototype.reload = function () {
    browser.reloadSession();
}

Page.prototype.waitForPage = function (reload = false) {
    if (reload) {
        browser.reload();
    }
    this.open();

    browser.waitUntil(() => {
        return browser.element('.Cboard__DisplaySettings').type !== 'NoSuchElement';
    }, 2000, 'App was not loaded');
}

module.exports = new Page()



