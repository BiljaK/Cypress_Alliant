/// <reference types="cypress" />

class PurchaseLocation {

    ImputField(value) {
        const imputField = cy.get('#purchaseLocation_input')
        imputField.clear()
        imputField.type(value);
    }

    SelectLocation() {
        const selectLocation = cy.get('#results > :nth-child(2) > :nth-child(2)')
        selectLocation.click()

    }

    NextButton() {
        const button = cy.get('.questions__next___J1v3h')
        button.click()
    }
}

export default PurchaseLocation