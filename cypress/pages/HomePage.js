/// <reference types="cypress" />

class HomePage {

    visit() {
        cy.visit("https://alliantcu.homestory.co/")
    }

    PurchaseLoc() {
        const purchaseLoc = cy.get(':nth-child(1) > .tile__tileTitle___QPqem')
        purchaseLoc.click();
    }

}

export default HomePage