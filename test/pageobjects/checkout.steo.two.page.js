const Page = require('./page');

class checkoutStepTwoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get itemTotal() { return $('.summary_subtotal_label') }
    get tax() { return $('.summary_tax_label') }
    get total() { return $('.summary_total_label') }
    get finishButton() { return $('#finish') }




}

module.exports = new checkoutStepTwoPage();