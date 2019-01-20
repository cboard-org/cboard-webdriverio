import { expect } from 'chai';
import Page from 'pages/Page';
import RootAppPage from 'pages/root.app.page';
import WelcomeAppPage from 'pages/welcome.app.page';

class CreatePictoAppPage extends Page {
  /**
   * define elements
   */
  get folder() {
    return $('=Folder');
  }
  get button() {
    return $('=Button');
  }

  get nameInput() {
    return $('//*[@name="name"]');
  }

  get labelInput() {
    return $('#label');
  }

  get vocalizationInput() {
    return $('#vocalization');
  }

  /**
   * define or overwrite page methods
   */
  public open() {
    super.open('https://app.cboard.io/');
    WelcomeAppPage.loginUser('anything@cboard.io', '1122');
    RootAppPage.unblockSettings();
  }

  reload() {
    super.reload();
  }
}

export default new CreatePictoAppPage();
