const cartPage = require("../pageobjects/cart.page");
const checkoutCompletePage = require("../pageobjects/checkout.complete.page");
const checkoutSteoTwoPage = require("../pageobjects/checkout.steo.two.page");
const checkoutStepOnePage = require("../pageobjects/checkout.step.one.page");
const iventoryPage = require("../pageobjects/iventory.page");
const loginPage = require("../pageobjects/login.page")


describe("Swag Labs web site", function () {
    it("I want to buy a few things on site", function () {
        loginPage.open();
        loginPage.login('standard_user', 'secret_sauce');
        loginPage.browserCheck("https://www.saucedemo.com/inventory.html");

        iventoryPage.sauceLabsBackpack.click();
        iventoryPage.sauceLabsBikeLight.click();
        expect(iventoryPage.shoppingCartBadge).toHaveText("2");

        iventoryPage.shoppingCart.click();
        loginPage.browserCheck("https://www.saucedemo.com/cart.html");

        cartPage.checkoutButton.click();
        loginPage.browserCheck("https://www.saucedemo.com/checkout-step-one.html");

        checkoutStepOnePage.checkout('Dejan', 'Barackov', '12330');
        loginPage.browserCheck("https://www.saucedemo.com/checkout-step-two.html");


        expect(checkoutSteoTwoPage.itemTotal).toHaveText("Item total: $39.98");
        expect(checkoutSteoTwoPage.tax).toHaveText("Tax: $3.20");
        expect(checkoutSteoTwoPage.total).toHaveText("Total: $43.18");
        checkoutSteoTwoPage.finishButton.click();
        loginPage.browserCheck("https://www.saucedemo.com/checkout-complete.html")

        expect(checkoutCompletePage.message).toHaveText('THANK YOU FOR YOUR ORDER');

    })
});

