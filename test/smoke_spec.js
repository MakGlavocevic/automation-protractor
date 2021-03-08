var PageObject = require('../page_objects/page_object_model')

describe('smoke test demo', function() {
var pageObject

beforeEach(function(){

  pageObject = new PageObject()

  browser.waitForAngularEnabled(false);

  browser.get('http://automationpractice.com/index.php');

})


      it('shall not smoke', function() {
  
      expect(browser.getTitle()).toEqual('My Store');

      pageObject.signinButton.click();
      
      pageObject.emailField.sendKeys('abhtestinginternship@gmail.com');
      pageObject.passwordField.sendKeys('!Qwerty123');

      pageObject.arSigninButton.click();
     
      expect(pageObject.loginAccountText.getText()).toEqual('MY ACCOUNT');

      pageObject.homeButton.click();

      pageObject.searchBar.sendKeys('Blouse');
      pageObject.searchButton.click();
      
      expect(pageObject.searchTerm.getText()).toEqual('"BLOUSE"');

      pageObject.productBlouse.click();
      pageObject.productSize.sendKeys('M');
      pageObject.productColor.click();
      pageObject.addToCart.click();

      var EC = protractor.ExpectedConditions;
      browser.wait(EC.elementToBeClickable(pageObject.proceedCheckout), 10000);
      pageObject.proceedCheckout.click();

      expect(pageObject.inStock.getText()).toEqual('In stock');

      pageObject.summaryCheckoutButton.click();
      
      expect(pageObject.addressPageText.getText()).toEqual('ADDRESSES');

      pageObject.addressCheckoutButton.click();

      expect(pageObject.shippingPageText.getText()).toEqual('SHIPPING');

      pageObject.tosCheckbox.click();
      pageObject.shippingCheckoutButton.click();

      expect(pageObject.paymentMethodText.getText()).toEqual('PLEASE CHOOSE YOUR PAYMENT METHOD');

      pageObject.payByBank.click();

      expect(pageObject.orderSummaryText.getText()).toEqual('ORDER SUMMARY');

      pageObject.orderSummaryCheckoutButton.click();

      expect(pageObject.orderConfirmationText.getText()).toEqual('ORDER CONFIRMATION');

      expect(pageObject.orderCompleteText.getText()).toEqual('Your order on My Store is complete.');
     

    });
  });