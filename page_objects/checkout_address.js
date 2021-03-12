var TestData = require('../data/data');
const Page = require("./page");

class CheckoutAddress extends Page.Page{
constructor(){
    super();
    this.title="Checkout Address";
}

// GETTERS

get addressPageText() {
    return element(by.xpath("//h1[contains(text(),'Addresses')]")); 
}
get chooseAddress() {
    return element(by.css('#id_address_delivery')); 
}
get deliveryAddressUpdate() {
    return element(by.css('#address_delivery > li.address_update > a > span')); 
}
get billingAddressUpdate() {
    return element(by.css('#address_invoice > li.address_update > a > span')); 
}
get addNewAddress() {
    return element(by.css('#center_column > form > div > p > a > span')); 
}
get proceedCheckoutAddress() {
    return element(by.css('#center_column > form > p > button > span')); 
}
get continueShoppingAddress() {
    return element(by.css('#center_column > form > p > a')); 
}
get commentAddressBox() {
    return element(by.css('#ordermsg > textarea')); 
}
get checkboxAddress() {
    return element(by.css('#addressesAreEquals')); 
}

// ACTIONS

checkAddressCheckoutPage() {
    expect(this.addressPageText.getText()).toEqual(TestData.terms.addressTitle);
}











}

module.exports = new CheckoutAddress();