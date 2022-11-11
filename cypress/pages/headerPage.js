class headerPage {
    selectors = {
        searchBox: '#search_query_top',
        submitButton: '#searchbox[type="submit"',
        headerContainer: '.heading-counter'
    }

    typeToSearchField(productNameText) {
        cy.get(selectors.searchBox).type(productNameText)
    }

    clickOnElement(element) {
        cy.get(element).click()
    }
} module.exports = new headerPage()