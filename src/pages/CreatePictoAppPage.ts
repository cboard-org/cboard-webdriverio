import { expect } from 'chai';

var rn = require('random-number');
import randomstring from 'randomstring';
import BasePage from 'src/pages/BasePage';
import RootAppPage from 'src/pages/RootAppPage';
import WelcomeAppPage from 'src/pages/WelcomeAppPage';

class CreatePictoAppPage extends BasePage {
	/**
	 * define elements
	 */
	get pageH6() {
		return $('h6=Create tile');
	}
	get folder() {
		return $('//input[@value="folder"]');
	}
	get button() {
		return $('//input[@value="button"]');
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
	get saveButton() {
		return $('span=Save');
	}
	get searchImages() {
		return $('//button[@aria-label="Symbol search"]');
	}
	get searchInput() {
		return $('//input[@label="Search symbol library"]');
	}
	get firstSymbol() {
		return $('//ul[@role="listbox"]//li[@role="option"]');
	}
	get colorInputs() {
		return $$('//*[@aria-label="Color"]//input[@name="color"]');
	}


	/**
	 * define or overwrite page methods
	 */
	open() {
		browser.url('/');
		WelcomeAppPage.loginUser();
		RootAppPage.unblockSettings();
		RootAppPage.clickOnCreateTiles();
		expect(this.pageH6.isDisplayed()).to.be.true;
	}

	reload() {
		super.reload();
	}

	createPicto(label, vocalization, type = 'button', search = '') {

		if (search !== '') {
			this.searchImages.click();
			this.searchInput.setValue(search);
			browser.pause(2000);

			this.firstSymbol.click();
		}

		this.labelInput.setValue(label);
		this.vocalizationInput.setValue(vocalization);

		if (type === 'folder') {
			this.folder.click();
		}
		this.saveButton.click();
	}

	clickOnRandomColor() {
		var options = {
			min: 0,
			max: this.colorInputs.length - 1,
			integer: true
		};
		var index = rn(options);
		this.colorInputs[index].click();
	}

	updateLabel() {
		var label = randomstring.generate({
			length: 5,
			charset: 'alphabetic'
		});
		//this.labelInput.doubleClick();
		//const oldLabel = this.labelInput.getText();
		this.labelInput.setValue(label);
		return label;
	}

	updateVocalization() {
		var vocalization = randomstring.generate({
			length: 8,
			charset: 'alphabetic'
		});
		const oldLabel = this.labelInput.getText();
		this.vocalizationInput.setValue(vocalization);
		return oldLabel;
	}
}

export default new CreatePictoAppPage();
