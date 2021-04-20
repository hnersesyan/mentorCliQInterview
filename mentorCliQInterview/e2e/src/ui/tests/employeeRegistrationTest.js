import { expect } from "chai";
import appConfig from "../config/appConfig";
import basicInfoPage from "../pages/basicInfoPage.js";
import employmentInfoPage from "../pages/employmentInfoPage.js";
import groupManagementPage from "../pages/groupManagementPage.js";
import profilePage from "../pages/profilePage.js"
import applicant from "../fixture/applicant";
browser.ignoreSynchronization = true;

describe("User Account Configuration Test", async () => {


    for (let i = 0; i < applicant.length; i++) {
        describe(`Submit New Employee ${applicant[i].firstName} ${applicant[i].lastName}`, async () => {
            before(async () => {
                await browser.get(appConfig.registration.appUrl);
            });

            it("should be able to input Basic Information", async () => {
                const beforeExitUrl = await browser.getCurrentUrl();
                expect(await browser.getCurrentUrl()).to.include("manage");
                expect(await basicInfoPage.titleText.getText()).to.equal(basicInfoPage.ttlText);
                await basicInfoPage.registration(applicant[i]);
            });

            it("should be able to input Employment Information", async () => {
                await employmentInfoPage.fillEmployeeInfo(applicant[i]);
            });

            it("should not be able to Create Employee Group up to 5 employee", async () => {
                await groupManagementPage.createGroupUpTo5();
                expect(await groupManagementPage.alertUpTo5.isPresent()).to.equal(true);
            });

            it("should be able to Create Employee Group", async () => {
                expect(await groupManagementPage.titleText.getText()).to.equal(groupManagementPage.ttlText);

                await groupManagementPage.createGroup();
                expect(await groupManagementPage.modal.isPresent()).to.equal(true, "modal is not visisble");
            });

            it("should be able to go to navigate to Profile page", async () => {
                await groupManagementPage.clickElement(groupManagementPage.btnSubmitPrimary);
                await groupManagementPage.waitUntilIsNotVisible(groupManagementPage.btnSubmitPrimary);

                await profilePage.waitUntilIsVisible(profilePage.createNewGroupbtn);
                expect(await profilePage.userInfoTbl.isPresent()).to.equal(true, "userInfoTbl is not visisble");
                expect(await profilePage.editBtn.isPresent()).to.equal(true, "editBtn is not visisble");
                expect(await profilePage.veiwListBtn.isPresent()).to.equal(true, "veiwListBtn is not visisble");
            });
        });
    }

});