declare namespace Cypress {
    interface Chainable {
        /**
         * Login to application. Use this function in tests which require logged in context
         * @param username 
         * @param password 
         */
        login(username: string, password: string): void;
    }
}