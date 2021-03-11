var TestData = require('../data/data');
const Page = require("./page");

class CheckoutShipping extends Page.Page{
constructor(){
    super();
    this.title="Checkout Shipping";
}

// GETTERS

get shippingPageText() {return element(by.xpath("//h1[contains(text(),'Shipping')]")); }
get termsOfService() {return element(by.css('#cgv')); }
get readToS() {return element(by.css('#form > div > p.checkbox > a')); }
get proceedCheckoutShipping() {return element(by.css('#form > p > button')); }
get continueShoppingShipping() {return element(by.css('#form > p > a')); }

// ACTIONS

checkShippingCheckoutPage(){

    expect(element(by.xpath("//h1[contains(text(),'Shipping')]")).getText()).toEqual(TestData.terms.shippingTitle);

}









}

module.exports = new CheckoutShipping();