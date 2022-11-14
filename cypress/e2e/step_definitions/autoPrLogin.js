import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import header from "../../pages/autoPrLoginpage"

Given ("Open product", () => {
    cy.visit("/")
})

When ("Open section {string} in shop header", (sectionName) => {
    header.openShopMenu(sectionName);
})

When ("Close modal letter", () => {
    cy.get(header.selectors.closeButtonStartModal).click()
})

Then ("Section is open", () => {
    cy.get(header.selectors.titlePage).should('be.visible')
})
