import { User } from "../types/registerTypes"
import { CommonUserFields } from "../types/userTypes"

export const homePage = {

    clickLogout: () => {
        cy.get('#logout').click()
    },

    clickAddMore: () => {
        cy.get('#addmore').click()
    },

    clickEditOnUser: (user: CommonUserFields) => {
        cy.get('ul li').contains(`${user.firstName} ${user.lastName}`).find('.edit').click()
    }

}