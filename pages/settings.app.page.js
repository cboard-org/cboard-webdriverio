const page = require('./page');

const settingsAppPage = Object.create(page, {
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/');
    } },
});

module.exports = settingsAppPage;
