import { User } from "../types/registerTypes"

export const homePage = {

    clickLogout: () => {
        cy.get('#logout').click()
    },

    clickAddMore: () => {
        cy.get('#addmore').click()
    },

    clickEditOnUser: (user: User) => {
        cy.get('ul li').contains(`${user.firstName} ${user.lastName}`).find('.edit').click()
    }

}