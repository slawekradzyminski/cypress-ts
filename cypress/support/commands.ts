Cypress.Commands.add('login', (username: string, password: string) => {
    cy.session(
        [username, password],

        () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:4001/users/signin',
                body: {
                    username: username,
                    password: password,
                },
            }).then((response) => {
                localStorage.setItem('user', JSON.stringify(response.body))
                cy.setCookie('token', response.body.token)
            })
        },

        {
            validate() {
                cy.getCookie('token').then(cookie => {
                    cy.request({
                        method: 'GET',
                        url: 'http://localhost:4001/users/me',
                        headers: {
                            Authorization: `Bearer ${cookie?.value}`
                        }
                    }).its('status').should('eq', 200)
                })
            },
        }
    )
})