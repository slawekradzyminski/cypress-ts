import { getRandomUser, getRandomUserWithFirstName } from "../generators/userGenerator"
import { usersMocks } from "../mocks/usersMocks"
import { User } from "../types/registerTypes"
import { loginResponseFrom } from "../utils/loginResponseUtil"

const apiUrl = Cypress.env('backendUrl')

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.session(
        [username, password],

        () => {
            cy.request({
                method: 'POST',
                url: `${apiUrl}/users/signin`,
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

Cypress.Commands.add('register', (user: User) => {
    cy.request({
        method: 'POST',
        url: `${apiUrl}/users/signup`,
        body: user
    })
})

Cypress.Commands.add('enterHomePageInIsolation', () => {
    const user = getRandomUserWithFirstName('Slawomir')
    const loginResponse = loginResponseFrom(user)
    localStorage.setItem('user', JSON.stringify(loginResponse))
    cy.setCookie('token', loginResponse.token)
    usersMocks.mockSuccess()
    cy.visit('/')
})