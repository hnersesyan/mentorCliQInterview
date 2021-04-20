import basePage from "./basePage";
// import { protractor } from "protractor/built/ptor";
// import { log } from "../../../logger";

class RegistrationPage extends basePage {
    constructor() {
        super();

        this.nameInput = element(by.id('first_name'));
        this.lastNameInput = element(by.id('last_name'));
        this.emailInput = element(by.id('email'));
        this.genderMaleInput = element(by.id('male'));
        this.genderFemaleInput = element(by.id('female'));
        this.cityInput = element(by.id('city'));
        this.countryInput = element(by.id('country'));
        this.nextBtn = element(by.buttonText('Next'));
        this.titleText = element(by.className('card-header'));
        this.ttlText = "Basic Information";

    }
  
    async clickButton(btnEl) {
        await this.waitUntilIsClickable(btnEl);    
        // await btnEl.click();
        try {
            if (await btnEl.isPresent()) {
                await btnEl.click();
            }
        } catch (error) {
            log("Button Click Failed");
        }
        // await this.waitUntilIsNotVisible(btnEl);
    }

    async registration(contactObj) {

        await this.waitUntilHasText(this.titleText, this.ttlText);
        await this.waitClearSendKeys(this.nameInput, contactObj.firstName);
        await this.waitClearSendKeys(this.lastNameInput, contactObj.lastName);
        await this.waitClearSendKeys(this.emailInput, contactObj.email);

        if (contactObj.gender == 'M') await this.genderMaleInput.click();
        if (contactObj.gender == 'F') await this.genderFemaleInput.click();

        await this.waitClearSendKeys(this.cityInput, contactObj.city);
        await this.dropDownSelectByValue(this.countryInput, contactObj.country);
        await this.clickButton(this.nextBtn);        
    }



}
export default new RegistrationPage();
