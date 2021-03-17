var TestData = require('../data/data');

class Page {
    constructor() {
this.title="Page"
    }

    // GETTERS

    get contactUs() {
        return element(by.css('#contact-link > a')); 
    } 
    get signIn() {
        return element(by.css('#header > div.nav > div > div > nav > div.header_user_info > a')); 
    }
    get cart() {
        return element(by.css('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')); 
    }
    get logo() {
        return element(by.css('#header_logo > a > img')); 
    }
    get newsletterField() {
        return element(by.css('#newsletter-input')); 
    }
    get newsletterButton() {
        return element(by.css('#newsletter_block_left > div > form > div > button')); 
    }
    get facebookLink() {
        return element(by.css('#social_block > ul > li.facebook > a')); 
    }
    get twitterLink() {
        return element(by.css('#social_block > ul > li.twitter > a')); 
    }
    get youtubeLink() {
        return element(by.css('#social_block > ul > li.youtube')); 
    }
    get googleplusLink() {
        return element(by.css('#social_block > ul > li.google-plus')); 
    }
    get myOrdersFL() {
        return element(by.css('#footer > div > section:nth-child(7) > div > ul > li:nth-child(1) > a')); 
    }
    get myCreditSlipsFL() {
        return element(by.css('#footer > div > section:nth-child(7) > div > ul > li:nth-child(2) > a')); 
    }
    get myAddressesFL() {
        return element(by.css('#footer > div > section:nth-child(7) > div > ul > li:nth-child(3) > a')); 
    }
    get myPersonalInfoFL() {
        return element(by.css('#footer > div > section:nth-child(7) > div > ul > li:nth-child(4) > a')); 
    }
    get specialsFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(1) > a')); 
    }
    get newProductsFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(2) > a')); 
    }
    get bestSellersFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(3) > a')); 
    }
    get ourStoresFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(4) > a')); 
    }
    get contactUsFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(5) > a')); 
    }
    get tosFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(6) > a')); 
    }
    get aboutUsFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(7) > a')); 
    }
    get sitemapFL() {
        return element(by.css('#block_various_links_footer > ul > li:nth-child(8) > a')); 
    }
    get womenFL() {
        return element(by.css('#footer > div > section.blockcategories_footer.footer-block.col-xs-12.col-sm-2 > div > div > ul > li > a')); 
    }
    

    // ACTIONS

    goToWebsite(){
        return browser.get(TestData.webpageLinks.webpageLink);
    }
    checkWebsite(){
        expect(browser.getTitle()).toEqual(TestData.terms.title);
    }



    
}

module.exports = { Page: Page }