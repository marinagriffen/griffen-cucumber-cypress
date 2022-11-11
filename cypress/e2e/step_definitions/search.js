
import headerPage from "../../page/headerPage"

Given ('Open main page', () => {
    cy.visit('/')

})

When ('Type to search box {string}', (searchText) => {
    headerPage.typeToSearchField(searchText)

})

And ('Click Submit', () => {
    headerPage.clickOnElement(headerPage.selectors.submitButton)

})

Then ('Display message {string}', (message) => {
    cy.get(headerPage.selectors.hederContainer).contains(message)
})