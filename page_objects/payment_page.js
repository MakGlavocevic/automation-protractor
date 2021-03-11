var TestData = require('../data/data');
const Page = require("./page");

class PaymentPage extends Page.Page{
constructor(){
    super();
    this.title="Payment Page";
}

// GETTERS

get paymentMethodText() {return element(by.xpath("//h1[contains(text(),'Please choose your payment method')]")); }
get payByBank() {return element(by.partialLinkText('Pay by bank wi')); }
get payByCheck() {return element(by.partialLinkText('Pay by bank che')); }
get continueShoppingPayment() {return element(by.css('#center_column > div > p > a')); }

// ACTIONS


checkPaymentCheckoutPage(){

    expect(element(by.xpath("//h1[contains(text(),'Please choose your payment method')]")).getText()).toEqual(TestData.terms.paymentMethodTitle);

}








}

module.exports = new PaymentPage();