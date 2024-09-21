export const homePage = {

    clickLogout: () => {
        cy.get('#logout').click()
    },

    clickAddMore: () => {
        cy.get('#addmore').click()
    }

}