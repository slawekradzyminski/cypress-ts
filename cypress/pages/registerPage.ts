import { User } from "../types/registerTypes";

export const registerPage = {

    attemptRegister: (user: User) => {
        cy.get('.form-control').eq(0).type(user.firstName)
        cy.get('.form-control').eq(1).type(user.lastName)
        cy.get('.form-control').eq(2).type(user.username)
        cy.get('.form-control').eq(3).type(user.password)
        cy.get('.form-control').eq(4).type(user.email)
        cy.get('.btn-primary').click()
    }

}