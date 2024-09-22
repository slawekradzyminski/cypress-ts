export const loginPage = {

    selectors: {
        inputSelector: '.form-control'
    },

    attemptLogin: (username: string, password: string) => {
        cy.get(loginPage.selectors.inputSelector).eq(0).type(username)
        cy.get(loginPage.selectors.inputSelector).eq(1).type(password)
        cy.get('.btn-primary').click()
    },

    clickRegister: () => {
        cy.get('.btn-link').click()
    }

}