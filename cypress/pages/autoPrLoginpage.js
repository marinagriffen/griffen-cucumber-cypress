const cypress = require("cypress")

class header {
    selectors = {
        headerMenuShop: '#mainnv > ul > li:nth-child(3) > ul',
        selectorSectionShopMenu: '#mainnv > ul > li:nth-child(3) > ul > li > a',
        closeButtonStartModal: "[aria-label='Close']",
        titlePage: ""
    }
}

/**
 * Open Login page
 */

openShopMenu(nameSection) {
    cy.get(this.selectors.headerMenuShop).invoke("show");
    cy.get(this.selectors.selectorSectionShopMenu).contains(nameSection).click()
}

module.exports = new header()