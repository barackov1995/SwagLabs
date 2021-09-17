const Page = require('./page');

class checkoutStepOnePage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstName() { return $('#first-name') }
    get lastName() { return $('#last-name') }
    get postalCode() { return $('#postal-code') }
    get continueButton() { return $('#continue') }

    checkout(firstname, lastname, postalcode) {
        this.firstName.setValue(firstname);
        this.lastName.setValue(lastname);
        this.postalCode.setValue(postalcode);
        this.continueButton.click();
        
    }




}

module.exports = new checkoutStepOnePage();