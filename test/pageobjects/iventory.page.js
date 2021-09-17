const Page = require('./page');

class IventoryPage extends Page {

    get sauceLabsBackpack() { return $('#add-to-cart-sauce-labs-backpack') }
    get sauceLabsBikeLight() { return $('#add-to-cart-sauce-labs-bike-light') }

    get shoppingCart() { return $('.shopping_cart_link') }
    get shoppingCartBadge() { return $('.shopping_cart_badge') }

};

module.exports = new IventoryPage();
