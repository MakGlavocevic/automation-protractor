var PageObject = require('../page_objects/page_object_model');
var TestData = require('../data/data');

describe('TS-001: Smoke Tests Suit', function() {

beforeEach( function() {

  pageObject = new PageObject;

  browser.waitForAngularEnabled(false);

  // (2) Go to automationpractice.com/index.php
  browser.get(TestData.webpageLinks.webpageLink);

});

      it('ST:001: Sign in with valid credentials, add item to shopping cart and successfully check out', function() {
     
      var EC = protractor.ExpectedConditions;

      // expect that we are on the right website
      expect(browser.getTitle()).toEqual(TestData.terms.title);

      // (3) Click “Sign in” button
      pageObject.signIn.click();

      // (4) Enter test data in “ALREADY REGISTERED?” box
      pageObject.emailFieldSignIn.sendKeys(TestData.accountInfo.accountEmail);
      pageObject.passwordFieldSignIn.sendKeys(TestData.accountInfo.accountPassword);

      // (5) Click green "Sign in" button
      pageObject.accountSignIn.click();

      // expect that the sign in was successfull
      expect(pageObject.loginAccountText.getText()).toEqual(TestData.terms.myAccountTitle);

      // (6) When redirected to "MY ACCOUNT" page click on the "Home" button
      pageObject.homeButton.click();

      // (7) When redirected to homepage type in search test data 
      pageObject.searchBar.sendKeys(TestData.terms.searchTerm);

      // (8) Click search icon button 
      pageObject.searchIcon.click();

      // expect that we are redirected on the correct page
      expect(pageObject.searchTerm.getText()).toEqual(TestData.terms.searchTermTitle);

      // (9) Click on the the searched product
      pageObject.productName.click();

      // (10) When redirected to product page select test data attributes
      pageObject.productSize.sendKeys(TestData.terms.size);
      pageObject.productColor.click();
      browser.sleep(1000);
      pageObject.displayAllImgs.click();

      // (11) Click on the larger product image to preview it
      pageObject.largerImage.click();

      // (12) Assert that all of the product images are viewable 
      browser.wait(EC.elementToBeClickable(pageObject.productImageOne), 10000);
      expect(pageObject.productImageOne.isDisplayed()).toBe(true);
      browser.wait(EC.elementToBeClickable(pageObject.productImageNextOne), 10000);
      pageObject.productImageNextOne.click();
      browser.wait(EC.elementToBeClickable(pageObject.productImageTwo), 10000);
      expect(pageObject.productImageTwo.isDisplayed()).toBe(true);
      browser.wait(EC.elementToBeClickable(pageObject.productImageNextTwo), 10000);
      pageObject.productImageNextTwo.click();
      browser.wait(EC.elementToBeClickable(pageObject.productImageThree), 10000);
      expect(pageObject.productImageThree.isDisplayed()).toBe(true);

      // (13) Click on the “Close”(X) button
      browser.wait(EC.elementToBeClickable(pageObject.productImageClose), 10000);
      pageObject.productImageClose.click();

      // (14) Click “Add to cart” button
      pageObject.addToCart.click();

      // (15) On the pop-up window click "Proceed to checkout" button
      browser.wait(EC.elementToBeClickable(pageObject.proceedCheckout), 10000);
      pageObject.proceedCheckout.click();

      // (16) On the "SHOPPING-CART SUMMARY" page assert if the item is "In stock"
      expect(pageObject.inStock.getText()).toEqual(TestData.terms.inStock);

      // (17) Click "Proceed to checkout" button 
      pageObject.proceedCheckoutSummary.click();

      // expect that we are redirected on the correct page
      expect(pageObject.addressPageText.getText()).toEqual(TestData.terms.addressTitle);

      // (18) On the "ADDRESSES" page click "Proceed to checkout" button
      pageObject.proceedCheckoutAddress.click();

      // expect that we are redirected on the correct page
      expect(pageObject.shippingPageText.getText()).toEqual(TestData.terms.shippingTitle);

      // (19) On the "SHIPPING" page click "Terms of service" check box
      pageObject.termsOfService.click();

      // (20) Click "Proceed to checkout" button
      pageObject.proceedCheckoutShipping.click();

      // expect that we are redirected on the correct page
      expect(pageObject.paymentMethodText.getText()).toEqual(TestData.terms.paymentMethodTitle);

      // (21) On the "PLEASE CHOOSE YOUR PAYMENT METHOD" page click on the "Pay by bank wire" button
      pageObject.payByBank.click();

      // expect that we are redirected on the correct page
      expect(pageObject.orderSummaryText.getText()).toEqual(TestData.terms.orderSummaryTitle);

      // (22) On the "ORDER SUMMARY" click on the "I confirm my order" button
      pageObject.proceedCheckoutOrderSummary.click();

      // expect that we are redirected on the correct page
      expect(pageObject.orderConfirmationText.getText()).toEqual(TestData.terms.orderConfirmationTitle);

      // (23) Assert that it says "Your order on My Store is complete."
      expect(pageObject.orderCompleteText.getText()).toEqual(TestData.terms.orderCompleteTitle);
     

    });
  });