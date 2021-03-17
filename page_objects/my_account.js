var TestData = require('../data/data');
const Page = require("./page");

class MyAccount extends Page.Page{
constructor(){
    super();
    this.title="My Account";
}

// GETTERS

get loginAccountText() {
    return element(by.xpath(" //h1[contains(text(),'My account')]")); 
}
get orderHistory() {
    return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a > span')); 
}
get creditSlips() {
    return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a > span')); 
}
get myAddresses() {
    return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a > span')); 
}
get myPersonalInfo() {
    return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span'));
}
get myWishlist() {
    return element(by.css('#center_column > div > div:nth-child(2) > ul > li > a > span')); 
}
get homeButton() {
    return element(by.css('#center_column > ul > li > a > span')); 
}

// ACTIONS

checkSignInSuccessfull(){
    expect(this.loginAccountText.getText()).toEqual(TestData.terms.myAccountTitle)
}












}

module.exports = new MyAccount();