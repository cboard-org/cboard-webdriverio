export default class Page {
  get h1() {
    return $('h1').getText();
  }

  open(path) {
    browser.url(path);
  }
}
