const Page = require('./page');

class CartPage extends Page {

    get checkoutButton () { return $('#checkout') }
    
    
};

module.exports = new CartPage();