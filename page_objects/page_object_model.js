var PageObject = function () {}

PageObject.prototype = Object.create({}, {

    emailField: {get: function (){return element(by.css('#email')) } },
    passwordField: {get: function (){return element(by.css('#passwd')) } },
    loginAccountText: {get: function (){return element(by.css('#center_column > h1')) } },
    homeButton: {get: function (){return element(by.css('#center_column > ul > li > a > span')) } },
    arSigninButton: {get: function (){return element(by.css('#SubmitLogin > span')) } },
    signinButton: {get: function (){return element(by.partialLinkText('Sign')) } },
    searchBar: {get: function (){return element(by.css('#search_query_top')) } },
    searchTerm: {get: function (){return element(by.css('#center_column > h1 > span.lighter')); } },
    searchButton: {get: function (){return element(by.css('#searchbox > button')); } },
    productBlouse: {get: function (){return element(by.partialLinkText('Blou')) } },
    productSize: {get: function (){return element(by.css('#group_1')) } },
    productColor: {get: function (){return  element(by.css('#color_8')) } },
    addToCart: {get: function (){return element(by.css('#add_to_cart > button > span')) } },
    proceedCheckout: {get: function (){return element(by.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a')) } },
    inStock: {get: function (){return element(by.xpath("//span[contains(text(),'In stock')]")) } },
    summaryCheckoutButton: {get: function (){return element(by.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span')) } },
    addressPageText: {get: function (){return element(by.xpath("//h1[contains(text(),'Addresses')]")) } },
    addressCheckoutButton: {get: function (){return element(by.css('#center_column > form > p > button > span')) } },
    shippingPageText: {get: function (){return element(by.xpath("//h1[contains(text(),'Shipping')]")) } },
    tosCheckbox: {get: function (){return element(by.css('#cgv')) } },
    shippingCheckoutButton: {get: function (){return element(by.css('#form > p > button > span')) } },
    paymentMethodText: {get: function (){return element(by.xpath("//h1[contains(text(),'Please choose your payment method')]")) } },
    payByBank: {get: function (){return element(by.partialLinkText('Pay by bank wi')) } },
    payByCheck: {get: function (){return element(by.partialLinkText('Pay by bank che')) } },
    orderSummaryText: {get: function (){return element(by.xpath(" //h1[contains(text(),'Order summary')]")) } },
    orderSummaryCheckoutButton: {get: function (){return element(by.css('#cart_navigation > button > span')) } },
    orderConfirmationText: {get: function (){return element(by.xpath(" //h1[contains(text(),'Order confirmation')]")) } },
    orderCompleteText: {get: function (){return element(by.xpath(" //strong[contains(text(),'Your order on My Store is complete.')]")) } },

})

module.exports = PageObject