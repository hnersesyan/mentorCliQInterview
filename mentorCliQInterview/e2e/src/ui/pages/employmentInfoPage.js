import basePage from "./basePage";

class EmployeePage extends basePage {
  constructor() {
    super();

    this.job = element(by.id('job_title'));
    this.department = element(by.id('department'));

    this.nextBtn = element(by.buttonText('Next'));
    this.backBtn = element(by.buttonText('Back'));
    this.titleText = element(by.className('card-header'));
    this.ttlText = "Employment Information";
  }

  async clickButton(btnEl) {
    await this.waitUntilIsClickable(btnEl);    
    await btnEl.click();
    try {
        if (await btnEl.isPresent()) {
            await btnEl.click();
        }
    } catch (error) {
        log("Button Click Failed");
    }
    // await this.waitUntilIsNotVisible(btnEl);
}


  async fillEmployeeInfo(contactObj) {
    await this.waitUntilHasText(this.titleText, this.ttlText);

    await this.waitClearSendKeys(this.job, contactObj.job);
    await this.dropDownSelectByValue(this.department, contactObj.department);
    await this.clickButton(this.nextBtn);    
  }



}
export default new EmployeePage();
