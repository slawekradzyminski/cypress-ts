Cypress.Commands.add('login', (username: string, password: string) => {
    // 1. cy.request logowania
    cy.request({
        method: 'POST',
        url: 'http://localhost:4001/users/signin',
        body: {
            username: username,
            password: password,
        },
    }).then((response) => {
        // 2. ustawimy odpowiedź w localStorage
        localStorage.setItem('user', JSON.stringify(response.body))
        // 3. ustawimy ciastko 'token' z wartością tokena z odpowiedzi
        cy.wrap(response.body.token).as('jwtToken')
        cy.setCookie('token', response.body.token)
    })
    // 4. wejdziemy na stronę główną i powinniśmy być zalogowani
    cy.visit('/')
})