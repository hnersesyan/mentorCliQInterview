import basePage from "./basePage";
// import { protractor } from "protractor/built/ptor";
// import { log } from "../../../logger";

class groupManagementPage extends basePage {
    constructor() {
        super();

        this.createNewGroupbtn = element(by.className('btn btn-primary primary mt-3'));
        
        this.userInfoTbl = element(by.className('table table-borderless'));
        this.row = this.userInfoTbl.all(by.tagName("tr"));

        // this.groupNameInput = element(by.id('group_name'));
        this.editBtn = element(by.className('btn btn-primary mt-6 mr-3'));
        this.veiwListBtn = element(by.className('btn btn-primary mt-6'));
    }

    async clickElement(el) {
        await this.waitUntilIsVisible(el);
        // await el.click();
        try {
            if (await el.isPresent()) {
                await el.click();
            }
        } catch (error) {
            log("Element Click Failed");
        }
        // await this.waitUntilIsNotVisible(btnEl);
    }

    makeGroupName(length) {
        var result = ["group_"];
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
        await this.clickElement(this.row.get(5));
        await this.clickElement(this.createBtn);

        await this.waitUntilIsVisible(this.groupNameInput);
        await this.waitClearSendKeys(this.groupNameInput, this.makeGroupName(5));
    }

    async createGroupUpTo5() {

        await this.waitUntilHasText(this.titleText, this.ttlText);

        await this.clickElement(this.row.get(1));
        await this.clickElement(this.row.get(2));
        await this.clickElement(this.row.get(4));
        await this.clickElement(this.row.get(5));
        await this.clickElement(this.row.get(6));
        await this.clickElement(this.row.get(7));
        await this.clickElement(this.createBtn);

        // await this.waitUntilIsVisible(this.groupNameInput);    
        // await this.waitClearSendKeys(this.groupNameInput, this.makeGroupName(5));            
    }




}
export default new groupManagementPage();
