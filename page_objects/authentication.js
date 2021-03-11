var TestData = require('../data/data');
const Page = require("./page");

class Authentication extends Page.Page{
constructor(){
    super();
    this.title="Authentication";
}

// GETTERS

get emailFieldCreateAccount() {return element(by.css('#email_create')); }
get createAccountButton() {return element(by.css('#SubmitCreate > span')); }
get emailFieldSignIn() {return element(by.css('#email')); }
get passwordFieldSignIn() {return element(by.css('#passwd')); }
get forgotPasswordButton() {return element(by.css('#login_form > div > p.lost_password.form-group > a')); }
get accountSignIn() {return element(by.css('#SubmitLogin > span')); }

// ACTIONS

signInAccount(){

    element(by.css('#email')).sendKeys(TestData.accountInfo.accountEmail);
    element(by.css('#passwd')).sendKeys(TestData.accountInfo.accountPassword);
    element(by.css('#SubmitLogin > span')).click()

}










}

module.exports = new Authentication();