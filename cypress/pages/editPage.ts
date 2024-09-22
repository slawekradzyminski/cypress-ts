import { User } from "../types/registerTypes";
import { CommonUserFields } from "../types/userTypes";

export const editPage = {

    verifyAutocomplete: (user: CommonUserFields) => {
        cy.get('.form-control').eq(0).should('have.value', user.firstName)
        cy.get('.form-control').eq(1).should('have.value', user.lastName)
        cy.get('.form-control').eq(2).should('have.value', user.email)
        cy.get('.form-control').eq(3).should('have.value', user.username)
        cy.get('.form-control').eq(4).should('have.value', user.roles?.join())
    },

    editUserWith: (newUserData: CommonUserFields) => {
        cy.get('.form-control').eq(0).clear().type(newUserData.firstName)
        cy.get('.form-control').eq(1).clear().type(newUserData.lastName)
        cy.get('.form-control').eq(2).clear().type(newUserData.email)
        cy.get('.btn-primary').click()
    }

}