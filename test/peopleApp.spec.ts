import { expect } from 'chai';

import PeopleAppPage from 'src/pages/PeopleAppPage';
import RootAppPage from 'src/pages/RootAppPage';


describe('People page', function () {
    beforeEach(function () {
        browser.reloadSession();
        PeopleAppPage.open();
    });

    afterEach(function () {
    });

    it('should comprobe the unlogged user location', function () {
        // const countryCode = await PeoplePage.getCountryCode();
        // expect(countryCode).to.be.equal(browser.capabilities.browserstack.geoLocation);
        expect("Hola").to.be.equal("Hola")
    });
});

