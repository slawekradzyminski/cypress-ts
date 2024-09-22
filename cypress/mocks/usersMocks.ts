export const usersMocks = {

    mockSuccess: () => {
        cy.intercept('GET', '**/users', { fixture: 'users.json' })
    }

}