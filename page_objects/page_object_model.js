var PageObject = function () {}

PageObject.prototype = Object.create({}, {

// HOMEPAGE

    contactUs: {get: function(){return element(by.css('#contact-link > a')) } },
    
    signIn: {get: function(){return element(by.css('#header > div.nav > div > div > nav > div.header_user_info > a')) } },
    
    cart: {get: function(){return element(by.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')) } },
    
    categoriesButton: {get: function(){return element(by.css('#block_top_menu > div')) } },
    
    womenButton: {get: function(){return element(by.css('#block_top_menu > ul > li:nth-child(1) > a')) } },
    
    dressesButton: {get: function(){return element(by.css('#block_top_menu > ul > li:nth-child(2) > a')) } },
    
    tshirtsButton: {get: function(){return element(by.css('#block_top_menu > ul > li:nth-child(3) > a')) } },
    
    popularButton: {get: function(){return element(by.css('#home-page-tabs > li.active > a')) } },
    
    bestSellersButton: {get: function(){return element(by.css('#home-page-tabs > li:nth-child(2) > a')) } },
    
    homeSliderButtonNext: {get: function(){return element(by.linkText('Next')) } },
    
    homeSliderButtonPrev: {get: function(){return element(by.linkText('Prev')) } },
    
    searchBar: {get: function(){return element(by.css('#search_query_top')) } },
    
    searchIcon: {get: function(){return element(by.css('#searchbox > button')) } },

// AUTHENTICATION

    emailFieldCreateAccount: {get: function(){return element(by.css('#email_create'))}},

    createAccountButton: {get: function(){return element(by.css('#SubmitCreate > span'))}},

    emailFieldSignIn: {get: function(){return element(by.css('#email'))}},

    passwordFieldSignIn: {get: function(){return element(by.css('#passwd'))}},

    forgotPasswordButton: {get: function(){return element(by.css('#login_form > div > p.lost_password.form-group > a'))}},

    accountSignIn: {get: function(){return element(by.css('#SubmitLogin > span'))}},

// MY ACCOUNT

    loginAccountText: {get: function(){return element(by.xpath(" //h1[contains(text(),'My account')]"))}},

    orderHistory: {get: function(){return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(1) > a > span'))}},

    creditSlips: {get: function(){return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(2) > a > span'))}},

    myAddresses: {get: function(){return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(3) > a > span'))}},

    myPersonalInfo: {get: function(){return element(by.css('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span'))}},

    myWishlist: {get: function(){return element(by.css('#center_column > div > div:nth-child(2) > ul > li > a > span'))}},

    homeButton: {get: function(){return element(by.css('#center_column > ul > li > a > span'))}},

// SEARCH PAGE

    productName: {get: function(){return element(by.partialLinkText('Blou'))}},

    searchTerm: {get: function(){return element(by.css('#center_column > h1 > span.lighter'))}},

// PRODUCT PAGE

    productQty: {get: function(){return element(by.css('#quantity_wanted'))}},

    productSize: {get: function(){return element(by.css('#group_1'))}},

    productColor: {get: function(){return element(by.css('#color_8'))}},

    addToCart: {get: function(){return element(by.css('#add_to_cart > button > span'))}},

    addToWishlist: {get: function(){return element(by.css('#wishlist_button'))}},

    shareTwitter: {get: function(){return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-twitter'))}},

    shareFacebook: {get: function(){return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-facebook'))}},

    shareGooglePlus: {get: function(){return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-google-plus'))}},

    sharePinterest: {get: function(){return element(by.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > p.socialsharing_product.list-inline.no-print > button.btn.btn-default.btn-pinterest'))}},

    displayAllImgs: {get: function(){return element(by.css('#wrapResetImages > a'))}},

    largerImage: {get: function(){return element(by.css('#bigpic'))}},

    productImageOne: {get: function(){return element(by.css("img[src='http://automationpractice.com/img/p/5/5-thickbox_default.jpg'"))}},

    productImageTwo: {get: function(){return element(by.css("img[src='http://automationpractice.com/img/p/6/6-thickbox_default.jpg'"))}},

    productImageThree: {get: function(){return element(by.css("img[src='http://automationpractice.com/img/p/7/7-thickbox_default.jpg'"))}},

    productImageNextOne: {get: function(){return element(by.css('#product > div.fancybox-wrap.fancybox-desktop.fancybox-type-image.fancybox-opened > div > div.fancybox-outer > a.fancybox-nav.fancybox-next'))}},

    productImageNextTwo: {get: function(){return element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div.fancybox-outer > a.fancybox-nav.fancybox-next'))}},

    productImageClose: {get: function(){return element(by.css('#product > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a'))}},

    addQty: {get: function(){return element(by.css('#quantity_wanted_p > a.btn.btn-default.button-plus.product_quantity_up > span'))}},

    removeQty: {get: function(){return element(by.css('#quantity_wanted_p > a.btn.btn-default.button-minus.product_quantity_down > span'))}},

// ADDED TO CART WINDOW

    proceedCheckout: {get: function(){return element(by.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'))}},

    continueShopping: {get: function(){return element(by.css('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > span > span'))}},

    productAddedToCartWindowClose: {get: function(){return element(by.css('#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span'))}},

// SUMMARY PAGE

    inStock: {get: function(){return element(by.xpath("//span[contains(text(),'In stock')]"))}},

    summaryAddQty: {get: function(){return element(by.css('#cart_quantity_up_2_8_0_455830 > span'))}},

    summaryRemoveQty: {get: function(){return element(by.css('#cart_quantity_down_2_8_0_455830 > span'))}},

    deleteProduct: {get: function(){return element(by.css('#\32 _7_0_455830 > i'))}},

    proceedCheckoutSummary: {get: function(){return element(by.css('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium > span'))}},

    continueShoppingSummary: {get: function(){return element(by.css('#center_column > p.cart_navigation.clearfix > a.button-exclusive.btn.btn-default'))}},

// CHECKOUT ADDRESSES

    addressPageText: {get: function(){return element(by.xpath("//h1[contains(text(),'Addresses')]"))}},

    chooseAddress: {get: function(){return element(by.css('#id_address_delivery'))}},

    deliveryAddressUpdate: {get: function(){return element(by.css('#address_delivery > li.address_update > a > span'))}},

    billingAddressUpdate: {get: function(){return element(by.css('#address_invoice > li.address_update > a > span'))}},

    addNewAddress: {get: function(){return element(by.css('#center_column > form > div > p > a > span'))}},

    proceedCheckoutAddress: {get: function(){return element(by.css('#center_column > form > p > button > span'))}},

    continueShoppingAddress: {get: function(){return element(by.css('#center_column > form > p > a'))}},

    commentAddressBox: {get: function(){return element(by.css('#ordermsg > textarea'))}},

    checkboxAddress: {get: function(){return element(by.css('#addressesAreEquals'))}},

// CHECKOUT SHIPPING

    shippingPageText: {get: function(){return element(by.xpath("//h1[contains(text(),'Shipping')]"))}},

    termsOfService: {get: function(){return element(by.css('#cgv'))}},

    readToS: {get: function(){return element(by.css('#form > div > p.checkbox > a'))}},

    proceedCheckoutShipping: {get: function(){return element(by.css('#form > p > button'))}},

    continueShoppingShipping: {get: function(){return element(by.css('#form > p > a'))}},

// PLEASE CHOOSE YOUR PAYMENT METHOD PAGE

    paymentMethodText: {get: function(){return element(by.xpath("//h1[contains(text(),'Please choose your payment method')]"))}},

    payByBank: {get: function(){return element(by.partialLinkText('Pay by bank wi'))}},

    payByCheck: {get: function(){return element(by.partialLinkText('Pay by bank che'))}},

    continueShoppingPayment: {get: function(){return element(by.css('#center_column > div > p > a'))}},

// ORDER SUMMARY PAGE

    orderSummaryText: {get: function(){return element(by.xpath(" //h1[contains(text(),'Order summary')]"))}},

    proceedCheckoutOrderSummary: {get: function(){return element(by.css('#cart_navigation > button > span'))}},

    otherPaymentButton: {get: function(){return element(by.css('#cart_navigation > a'))}},

// ORDER CONFIRMATION PAGE

    orderConfirmationText: {get: function(){return element(by.xpath(" //h1[contains(text(),'Order confirmation')]"))}},

    orderCompleteText: {get: function(){return element(by.xpath(" //strong[contains(text(),'Your order on My Store is complete.')]"))}},

    backToOrders: {get: function(){return element(by.css('#center_column > p > a'))}},

});

module.exports = PageObject

