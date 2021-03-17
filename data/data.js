require('dotenv').config();

const TestData = {

webpageLinks:{
       
webpageLink:'http://automationpractice.com/index.php'

},

accountInfo:{

accountEmail: process.env.TEST_USERNAME,

accountPassword: process.env.TEST_PASSWORD

},

terms:{

title:'My Store',

myAccountTitle:'MY ACCOUNT',

searchTerm:'Blouse',

searchTermTitle:'"BLOUSE"',

size:'M',

inStock:'In stock',

addressTitle:'ADDRESSES',

shippingTitle:'SHIPPING',

paymentMethodTitle:'PLEASE CHOOSE YOUR PAYMENT METHOD',

orderSummaryTitle:'ORDER SUMMARY',

orderConfirmationTitle:'ORDER CONFIRMATION',

orderCompleteTitle:'Your order on My Store is complete.'

}}


module.exports = TestData