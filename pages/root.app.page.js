const page = require('./page');

const rootAppPage = Object.create(page, {
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, '/board/root');
    } },
});

module.exports = rootAppPage;
