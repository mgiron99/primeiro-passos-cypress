import userData from '../fixtures/users/userData.json'

describe('Orange HRM tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameInput: "[name='firstName']",
    middleNameInput: "[name='middleName']",
    lastNameInput: "[name='lastName']",
    genericField: ".oxd-input.oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    closeButton: '.--close',
    submitButton: '[type=submit]',
    successAlert: 'body'
  }
  it.only('User Info Update - Success ', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameInput).clear().type('Matheus')
    cy.get(selectorList.middleNameInput).clear().type('De Lima')
    cy.get(selectorList.lastNameInput).clear().type('Giron')
    cy.get(selectorList.genericField).eq(3).clear().type('Theus')
    cy.get(selectorList.genericField).eq(4).clear().type('123456')
    cy.get(selectorList.genericField).eq(5).clear().type('654321')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-23-05')
    cy.get(selectorList.closeButton).click()
   cy.get(selectorList.genericField).eq(7).clear().type('1999-11-03')
   cy.get(selectorList.closeButton).click()
   cy.get(selectorList.submitButton).eq(0).click()
   cy.get(selectorList.successAlert).should('contain', 'Successfully Updated')
   


  })
  it('Login Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongAlert).should('have.text', 'Invalid credentials')
  })
})