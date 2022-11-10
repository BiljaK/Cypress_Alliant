/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import PurchaseLocation from "../pages/PurchaseLocation"

describe('Test Purches Location', function () {

    beforeEach(() => {

        const hp = new HomePage()

        hp.visit()
    })

    it('Verify that field City, State, or Zip is present', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()

        cy.get('#purchaseLocation_input').should('be.visible')
    })

    it('Verify that user is able to enter the zip code', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('123')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', '123')
    })

    it('Verify that user is allowed to enter more than 3 numbers', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('12345')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', '1234')
    })

    it('Verify that user is not allowed to enter less than 3 numbers', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('12')

        cy.get('.questions__next___J1v3h').should('be.disabled')
    })

    it('Verify that user is not allowed to leave the field blank', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField(' ')

        cy.get('.questions__next___J1v3h').should('be.disabled')
    })

    it('Verify that user is not allowed to enter special characters in the field', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('@#$%^$|')

        cy.get('.questions__next___J1v3h').should('be.disabled')
    })

    it('Verify that user is allowed to enter blank space between characters ', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('new york')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', 'New ')
    })

    it('Verify the field by entering the 5 digit zero', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('00000')

        cy.get('.questions__next___J1v3h').should('be.disabled')
    })

    it('Verify the field by entering the decimal number', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('12,34')

        cy.get('.questions__next___J1v3h').should('be.disabled')
    })

    it('Verify the field by entering valid zip code', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('77494')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', '77494')
    })

    it('Verify that alphabets are allowed', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('Nebraska')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', 'Nebraska')
    })

    it('Verify that user is allowed to enter uppercase letters', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('NEVADA')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', 'Nevada')
    })

    it('Verify that user is allowed to enter lowercase letters', function () {

        const hp = new HomePage()
        const pl = new PurchaseLocation()

        hp.PurchaseLoc()
        pl.ImputField('alabama')
        pl.SelectLocation()
        pl.NextButton()

        cy.get('.buyingPreferences__answered___kUxyI > .tile__tileTitle___QPqem').should('contain.text', 'Alabama')
    })

    afterEach(() => {
        cy.clearCookies()
    })
})