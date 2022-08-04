import { expect } from 'chai';

describe('BrowserStack Local Testing', () => {
    it('can check tunnel working', async () => {
      await browser.url('http://bs-local.com:45691/check');
      const pageSource = await browser.getPageSource();
      await expect(pageSource).to.have.string("Up and running");
    });
  });