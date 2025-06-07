class LoginTest {

    selectorList () {
        const selectors = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button[type='submit']",
    wrongAlert: "[role='alert']",

        }
        return selectors
    }

    accessLoginPage () {
       cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click() 
    }

    failStatusLogin(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click() 
        cy.get(this.selectorList().wrongAlert).should('have.text', 'Invalid credentials')
    }
}

export default LoginTest