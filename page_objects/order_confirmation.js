var TestData = require('../data/data');
const Page = require("./page");

class OrderConfirmation extends Page.Page{
constructor(){
    super();
    this.title="Order Confirmation";
}

// GETTERS

get orderConfirmationText() {return element(by.xpath(" //h1[contains(text(),'Order confirmation')]")); }
get orderCompleteText() {return element(by.xpath(" //strong[contains(text(),'Your order on My Store is complete.')]")); }
get backToOrders() {return element(by.css('#center_column > p > a')); }

// ACTIONS

checkConfirmationCheckoutPage(){

    expect(element(by.xpath(" //h1[contains(text(),'Order confirmation')]")).getText()).toEqual(TestData.terms.orderConfirmationTitle);

}

checkOrderComplete(){

    expect(element(by.xpath(" //strong[contains(text(),'Your order on My Store is complete.')]")).getText()).toEqual(TestData.terms.orderCompleteTitle);

}









}

module.exports = new OrderConfirmation();