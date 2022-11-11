import headerPage from "../../page/headerPage"

describe ('Search', () => {
    it('Check search result Version 1', () => {
        cy.visit('/')
        cy.get('#search_query_top').type('Printed Summer Dress')
        cy.get('#searchbox[type="submit"').click()
        cy.get('.heading-counter').contains('3 results have been found')

    })

    it('Check search result Version 2', () => {
        cy.visit('/')
        headerPage.typeToSearchField('Printed Summer Dress')
        headerPage.clickOnElement(headerPage.selectors.submitButton)
        cy.get(headerPage.selectors.hederContainer).contains('3 results have been found')
        

    })

})