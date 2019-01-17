import RootAppPage from 'pages/root.app.page';
import { assert } from 'chai';

describe('Root board page', function() {
  it('should display the valid page title', function() {
    RootAppPage.open();
  });
  it('should unblock settings after 4 clicks on lock icon', function() {});
  it('should display all icons and bars after unlock', function() {});
  it('should insert pictograms in communication bar when they are clicked', function() {});
  it('should delete pictograms when user clicks on X button', function() {});
});
