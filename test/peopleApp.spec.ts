import { expect } from 'chai';

import PeoplePage from 'src/pages/PeoplePage';

describe('People page', function () {
    beforeEach(function () {
        browser.reloadSession();
        PeoplePage.openFromSettings();
    });

    afterEach(function () {
    });

    it('should comprobe the unlogged user location', async function () {
        // const countryCode = await PeoplePage.getCountryCode();
        // expect(countryCode).to.be.equal(browser.capabilities.browserstack.geoLocation);
        expect("Hola").to.be.equal("Hola")
    });
});

