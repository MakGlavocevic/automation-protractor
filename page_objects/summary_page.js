var TestData = require('../data/data');
const Page = require("./page");

class SummaryPage extends Page.Page{
constructor(){
    super();
    this.title="Summary Page";
}

// GETTERS

get inStock() {return element(by.xpath("//span[contains(text(),'In stock')]")); }
get summaryAddQty() {return element(by.css('#cart_quantity_up_2_8_0_455830 > span')); }
get summaryRemoveQty() {return element(by.css('#cart_quantity_down_2_8_0_455830 > span')); }
get proceedCheckoutSummary() {return element(by.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')); }
get continueShoppingSummary() {return element(by.css('#center_column > p.cart_navigation.clearfix > a.button-exclusive.btn.btn-default')); }

// ACTIONS

productIsInStock(){

    expect(element(by.xpath("//span[contains(text(),'In stock')]")).getText()).toEqual(TestData.terms.inStock);

}









}

module.exports = new SummaryPage();