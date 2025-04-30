describe('Orange HRM tests', () => {

  const selectorList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "button[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      wrongAlert: "[role='alert']"
  }
  it('Login Success ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).should('contain.text', 'Dashboard')
    cy.get('.oxd-brand-banner > img').should('be.visible')
  })
  it('Login Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert).should('have.text', 'Invalid credentials')
  })
})