import { expect } from 'chai';

import PeopleAppPage from 'src/pages/PeopleAppPage';
import RootAppPage from 'src/pages/RootAppPage';


describe('People page for unregistered user ', function () {
    beforeEach(function () {
        PeopleAppPage.setProxyCountry();
        browser.reloadSession();
        PeopleAppPage.open();
    });

    afterEach(function () {
    });

    it('should contains valid information for location ', function () {
        expect(PeopleAppPage.getUserLocation()).to.be.equal("United States")
    });
});

