var TestData = require('../data/data');
const Page = require("./page");

class OrderSummary extends Page.Page{
constructor(){
    super();
    this.title="Order Summary";
}

// GETTERS

get orderSummaryText() {return element(by.xpath(" //h1[contains(text(),'Order summary')]")); }
get proceedCheckoutOrderSummary() {return element(by.css('#cart_navigation > button > span')); }
get otherPaymentButton() {return element(by.css('#cart_navigation > a')); }

// ACTIONS

checkSummaryCheckoutPage(){

    expect(element(by.xpath(" //h1[contains(text(),'Order summary')]")).getText()).toEqual(TestData.terms.orderSummaryTitle);

}









}

module.exports = new OrderSummary();