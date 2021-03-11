var EC = protractor.ExpectedConditions;
var TestData = 
    require('../data/data');
var page = 
    require('../page_objects/page'),
    addToCartWindow = 
    require('../page_objects/add_to_cart_window'),
    authentication =
    require('../page_objects/authentication'),
    checkoutAddress =
    require('../page_objects/checkout_address'),
    checkoutShipping =
    require('../page_objects/checkout_shipping'),
    homePage =
    require('../page_objects/homepage'),
    myAccount =
    require('../page_objects/my_account'),
    orderConfirmation =
    require('../page_objects/order_confirmation'),
    orderSummary = 
    require('../page_objects/order_summary'),
    paymentPage =
    require('../page_objects/payment_page'),
    productPage =
    require('../page_objects/product_page'),
    summaryPage =
    require('../page_objects/summary_page')


describe('TS-001: Smoke Tests Suit', function() {

beforeEach( function() {

  browser.waitForAngularEnabled(false);

  // (2) Go to automationpractice.com/index.php
  homePage.goToWebsite();

});

      it('ST:001: Sign in with valid credentials, add item to shopping cart and successfully check out', function() {

      // expect that we are on the right website
      homePage.checkWebsite();

      // (3) Click “Sign in” button
      homePage.signIn.click();

      // (4) Enter test data in “ALREADY REGISTERED?” box
      // (5) Click green "Sign in" button
      authentication.signInAccount();

      // expect that the sign in was successfull
      myAccount.checkSignInSuccessfull();

      // (6) When redirected to "MY ACCOUNT" page click on the "Home" button
      myAccount.homeButton.click();

      // (7) When redirected to homepage type in search test data 
      homePage.searchBar.sendKeys(TestData.terms.searchTerm);

      // (8) Click search icon button 
      homePage.search();

      // expect that we are redirected on the correct page
      homePage.checkTermSearch();

      // (9) Click on the the searched product
      homePage.productBlouse.click();

      // (10) When redirected to product page select test data attributes
      productPage.changeSize();
      productPage.changeColor();
      browser.sleep(1000);
      productPage.displayAllImgs.click();

      // (11) Click on the larger product image to preview it
      productPage.largerImage.click();

      // (12) Assert that all of the product images are viewable 
      productPage.checkGalleryImgs();

      // (13) Click on the “Close”(X) button
      productPage.closeGallery();

      // (14) Click “Add to cart” button
      productPage.addToCart.click();

      // (15) On the pop-up window click "Proceed to checkout" button
      addToCartWindow.addToCartWindowProceedCheckout();

      // (16) On the "SHOPPING-CART SUMMARY" page assert if the item is "In stock"
      summaryPage.productIsInStock();

      // (17) Click "Proceed to checkout" button 
      summaryPage.proceedCheckoutSummary.click();

      // expect that we are redirected on the correct page
      checkoutAddress.checkAddressCheckoutPage();

      // (18) On the "ADDRESSES" page click "Proceed to checkout" button
      checkoutAddress.proceedCheckoutAddress.click();

      // expect that we are redirected on the correct page
      checkoutShipping.checkShippingCheckoutPage();

      // (19) On the "SHIPPING" page click "Terms of service" check box
      checkoutShipping.termsOfService.click();

      // (20) Click "Proceed to checkout" button
      checkoutShipping.proceedCheckoutShipping.click();

      // expect that we are redirected on the correct page
      paymentPage.checkPaymentCheckoutPage();

      // (21) On the "PLEASE CHOOSE YOUR PAYMENT METHOD" page click on the "Pay by bank wire" button
      paymentPage.payByBank.click();

      // expect that we are redirected on the correct page
      orderSummary.checkSummaryCheckoutPage();

      // (22) On the "ORDER SUMMARY" click on the "I confirm my order" button
      orderSummary.proceedCheckoutOrderSummary.click();

      // expect that we are redirected on the correct page
      orderConfirmation.checkConfirmationCheckoutPage();

      // (23) Assert that it says "Your order on My Store is complete."
      orderConfirmation.checkOrderComplete();
     

    });
  });