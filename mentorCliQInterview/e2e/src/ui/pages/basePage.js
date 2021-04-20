import { element } from "protractor";
import appConfig from "../config/appConfig";

export default class BasePage {
    constructor() {
        /**
         * wrap this.timeout. (ms) in t-shirt sizes
         */
        this.timeout = {
            xs: 420,
            s: 1000,
            m: 2000,
            l: 5000,
            xl: 9000,
            xxl: 25000
        };
        this.body = element(by.tagName("body"));
        /**
         * get an element"s width
         * extends protractor"s ElementFinder
         * @return {int} - the width of the element
         */
        protractor.ElementFinder.prototype.getWidth = function () {
            return this.getSize().then(size => {
                return size.width;
            });
        };
    }

     
    /**    
     * @returns {ExpectedCondition}
     */
    waitUntilIsVisible(el, timeOut = 5000) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(el)
            , timeOut, "timeout: waiting visibility of: " + el.locator());
    }

    waitUntilIsNotVisible(el, timeOut = 5000) {
        return browser.wait(protractor.ExpectedConditions.invisibilityOf(el)
            , timeOut, "timeout: waiting for invisibility Of: " + el.locator());
    }

    waitUntilIsClickable(el, timeOut = 5000) {
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(el)
            , timeOut, "timeout: waiting for element to be clickable: " + el.locator());
    }

    waitUntilHasText(el, text, timeOut = 5000) {
        return browser.wait(protractor.ExpectedConditions.textToBePresentInElement(el, text)
            , timeOut, "timeout: waiting for text to be Present in element: " + el.locator());
    }
  
    scrollTo(elm) {
        return browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    }

    forceClick(elm) {
        return browser.executeScript("arguments[0].click();", elm.getWebElement());
    }

    /**
     * test if an element has a class
     * @param  {elementFinder} locator - eg. $("div#myId")
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    hasClass(locator, klass) {
        return locator.getAttribute("class").then(classes => {
            return classes.split(" ").indexOf(klass) !== -1;
        });
    }

    async waitSendKeys(el, value) {
        await this.waitUntilIsClickable(el, 10000);
        el.sendKeys(value);
    }

    async waitClearSendKeys(el, value) {
        await this.waitUntilIsClickable(el, 10000);
        el.clear().sendKeys(value);
    }

    async checkBoxSelect(locator, value) {
        const isSelected = await locator.getAttribute("checked") == "true" ? true : false;
        if (isSelected != value)
            await locator.click();
    }

    async dropDownSelectByValue(locator, value) {
        const option = await locator.element(by.css(`option[value="${value}"]`));
        await locator.click();
        if (option != undefined) {
            await option.click();
            await option.click();
        }
    }

    async getDropDownSelectedItem(elm) {      
        const text = await elm.value;
        const value = await elm.getAttribute("value");
        return {
            text,
            value
        };
    }
}
