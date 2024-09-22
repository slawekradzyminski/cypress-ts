export const editMocks = {

    mockSuccess: (username: string) => {
        cy.intercept('PUT', `**/users/${username}`, { statusCode: 200 }).as('editRequest')
    }

}