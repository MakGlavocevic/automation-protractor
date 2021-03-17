var TestData = require('../data/data');
const Page = require("./page");

class Homepage extends Page.Page{
constructor(){
    super();
    this.title="Homepage";
}

// GETTERS

get categoriesButton() {
    return element(by.css('#block_top_menu > div')); 
} 
get womenButton() {
    return element(by.css('#block_top_menu > ul > li:nth-child(1) > a')); 
}
get dressesButton() {
    return element(by.css('#block_top_menu > ul > li:nth-child(2) > a')); 
}
get tshirtsButton() {
    return element(by.css('#block_top_menu > ul > li:nth-child(3) > a')); 
}
get popularButton() {
    return element(by.css('#home-page-tabs > li.active > a')); 
}
get bestSellersButton() {
    return element(by.css('#home-page-tabs > li:nth-child(2) > a')); 
}
get homeSliderButtonNext() {
    return element(by.linkText('Next')); 
}
get homeSliderButtonPrev() {
    return element(by.linkText('Prev')); 
}
get searchBar() {
    return element(by.css('#search_query_top')); 
}
get searchIcon() {
    return element(by.css('#searchbox > button')); 
}
get productBlouse() {
    return element(by.css('#center_column > ul > li > div > div.right-block > h5 > a')); 
}
get searchTerm() {
    return element(by.css('#center_column > h1 > span.lighter')); 
}

// ACTIONS

search(){
this.searchIcon.click();
}

checkTermSearch(){
    expect(this.searchTerm.getText()).toEqual(TestData.terms.searchTermTitle);
}








}

module.exports = new Homepage();