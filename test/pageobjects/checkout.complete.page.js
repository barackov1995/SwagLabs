const Page = require('./page');

class checkoutCompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    get message() { return $('.complete-header') }
    



}

module.exports = new checkoutCompletePage();