export default class Page {
  public open(path) {
    browser.url(path);
  }

  reload() {
    browser.reloadSession();
  }

  waitForPage(reload = false) {
    if (reload) {
      this.reload();
    }

    browser.waitUntil(
      () => {
        return (
          browser.$('.Cboard__DisplaySettings').getValue() !== 'NoSuchElement'
        );
      },
      2000,
      'App was not loaded'
    );
  }
}
