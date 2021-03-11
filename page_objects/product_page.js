var TestData = require('../data/data');
var EC = protractor.ExpectedConditions;
const Page = require("./page");

class ProductPage extends Page.Page{
constructor(){
    super();
    this.title="Product Page"
}

// GETTERS

get productQty() {return element(by.css('#quantity_wanted')); }
get productSize() {return element(by.css('#group_1')); }
get productColor() {return element(by.css('#color_8')); }
get addToCart() {return element(by.css('#add_to_cart > button > span')); }
get addToWishlist() {return element(by.css('#wishlist_button')); }
get shareTwitter() {return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-twitter')); }
get shareFacebook() {return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-facebook')); }
get shareGooglePlus() {return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-google-plus')); }
get sharePinterest() {return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-pinterest')); }
get displayAllImgs() {return element(by.css('#wrapResetImages > a')); }
get largerImage() {return element(by.css('#bigpic')); }
get productImageOne() {return element(by.css("img[src='http://automationpractice.com/img/p/5/5-thickbox_default.jpg'")); }
get productImageTwo() {return element(by.css("img[src='http://automationpractice.com/img/p/6/6-thickbox_default.jpg'")); }
get productImageThree() {return element(by.css("img[src='http://automationpractice.com/img/p/7/7-thickbox_default.jpg'")); }
get productImageNextOne() {return element(by.css('#product > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > div.fancybox-outer > a.fancybox-nav.fancybox-next')); }
get productImageNextTwo() {return element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div.fancybox-outer > a.fancybox-nav.fancybox-next')); }
get productImageClose() {return element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a')); }
get addQty() {return element(by.css('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span')); }
get removeQty() {return element(by.css('#quantity_wanted_p > a.btn.btn-default.button-minus.product_quantity_down > span'));}

// ACTIONS

changeSize(){

    element(by.css('#group_1')).sendKeys(TestData.terms.size);

}

changeColor(){

    element(by.css('#color_8')).click()

}

checkGalleryImgs(){

    browser.wait(EC.elementToBeClickable(element(by.css("img[src='http://automationpractice.com/img/p/5/5-thickbox_default.jpg'"))), 10000);
    expect(element(by.css("img[src='http://automationpractice.com/img/p/5/5-thickbox_default.jpg'")).isDisplayed()).toBe(true);
    browser.wait(EC.elementToBeClickable(element(by.css('#product > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > div.fancybox-outer > a.fancybox-nav.fancybox-next'))), 10000);
    element(by.css('#product > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > div.fancybox-outer > a.fancybox-nav.fancybox-next')).click();
    browser.wait(EC.elementToBeClickable( element(by.css("img[src='http://automationpractice.com/img/p/6/6-thickbox_default.jpg'"))), 10000);
    expect( element(by.css("img[src='http://automationpractice.com/img/p/6/6-thickbox_default.jpg'")).isDisplayed()).toBe(true);
    browser.wait(EC.elementToBeClickable(element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div.fancybox-outer > a.fancybox-nav.fancybox-next'))), 10000);
    element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div.fancybox-outer > a.fancybox-nav.fancybox-next')).click();
    browser.wait(EC.elementToBeClickable(element(by.css("img[src='http://automationpractice.com/img/p/7/7-thickbox_default.jpg'"))), 10000);
    expect(element(by.css("img[src='http://automationpractice.com/img/p/7/7-thickbox_default.jpg'")).isDisplayed()).toBe(true);

}

closeGallery(){

    browser.wait(EC.elementToBeClickable(element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a'))), 10000);
    element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a')).click();

}












}

module.exports = new ProductPage();