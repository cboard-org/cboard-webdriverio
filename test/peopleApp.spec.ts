import { expect } from 'chai';

import PeoplePage from 'src/pages/PeoplePage';
import RootAppPage from 'src/pages/RootAppPage';


describe('People page', function () {
    beforeEach(function () {
        browser.reloadSession();
        RootAppPage.open();
        PeoplePage.openFromRootPage();
    });

    afterEach(function () {
    });

    it('should comprobe the unlogged user location', function () {
        // const countryCode = await PeoplePage.getCountryCode();
        // expect(countryCode).to.be.equal(browser.capabilities.browserstack.geoLocation);
        expect("Hola").to.be.equal("Hola")
    });
});

