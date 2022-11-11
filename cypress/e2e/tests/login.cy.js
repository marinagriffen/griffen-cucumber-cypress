import authorizationPage from "../../page/loginPage"

describe ('Login', () => {
    it('login my user', () => {
        cy.visit('/')

        authorizationPage.openLoginPage()
        authorizationPage.fillAuthorizationForm('userEmail@yopmail', 'userPass')
        cy.get(authorizationPage.selectors.errorAlertDescription).contains('Authentication failed.')
        
        
        // cy.get('.header_user_info').click()
        // cy.get('#email').type('email')
        // cy.get('#passwd').type('password')
        // cy.get('#SubmitLogin').click()
        // cy.get('.alert li').contains('Authorization failed.')


    })
})