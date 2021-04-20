import basePage from "./basePage";
// import { protractor } from "protractor/built/ptor";
// import { log } from "../../../logger";

class groupManagementPage extends basePage {
    constructor() {
        super();

        this.groupTbl = element(by.className('card-body p-0'));
        this.row = this.groupTbl.all(by.tagName("tr"));

        this.groupNameInput = element(by.id('group_name'));
        this.createBtn = element(by.xpath("//button[contains(text(),'Create')]"));
        this.titleText = element(by.className('card-header'));
        this.ttlText = "Group Management";
        this.submitBtn = element(by.buttonText('Submit'));
        this.alertUpTo5 = element(by.id('client-snackbar'));
        this.modal = element(by.className('modal-content'));
        this.btnSecondary = element(by.xpath("//button[contains(text(),'Close')]"));
        this.btnSubmitPrimary = element(by.xpath("//div[@class='modal-footer']/button[2]"));
    }

    async clickElement(el) {
        await this.waitUntilIsVisible(el);
        // await el.click();
        try {
            if (await el.isPresent()) {
                await el.click();
            }
        } catch (error) {
            console.log("Element Click Failed");
        }
        // await this.waitUntilIsNotVisible(btnEl);
    }

    makeGroupName(length) {
        var result = [""];
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }


    async createGroup() {

        await this.waitUntilHasText(this.titleText, this.ttlText);

        await this.clickElement(this.row.get(1));
        await this.clickElement(this.row.get(3));       
        await this.clickElement(this.createBtn);

        await this.waitUntilIsVisible(this.groupNameInput);
        await this.waitClearSendKeys(this.groupNameInput, this.makeGroupName(5));
        await this.clickElement(this.submitBtn);
        await this.waitUntilIsVisible(this.modal);
    }

    async createGroupUpTo5() {

        await this.waitUntilHasText(this.titleText, this.ttlText);

        await this.clickElement(this.row.get(1));
        await this.clickElement(this.row.get(2));
        await this.clickElement(this.row.get(4));
        await this.clickElement(this.row.get(5));
        await this.clickElement(this.row.get(6));
        await this.clickElement(this.row.get(7));
        // await this.clickElement(this.createBtn);

        // await this.waitUntilIsVisible(this.groupNameInput);    
        // await this.waitClearSendKeys(this.groupNameInput, this.makeGroupName(5));            
    }




}
export default new groupManagementPage();
