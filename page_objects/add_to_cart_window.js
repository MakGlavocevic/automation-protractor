var EC = protractor.ExpectedConditions;
var TestData = require('../data/data');
const Page = require("./page");

class AddToCartWindow extends Page.Page{
constructor(){
    super();
    this.title="Add To Cart Window";
}

// GETTERS

get proceedCheckout() {
    return element(by.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')); 
}
get continueShopping() {
    return element(by.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span')); 
}
get productAddedToCartWindowClose() {
    return element(by.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span')); 
}

// ACTIONS

addToCartWindowProceedCheckout() {
    browser.wait(EC.elementToBeClickable(this.proceedCheckout), 10000);
    this.proceedCheckout.click();
}







}

module.exports = new AddToCartWindow();
