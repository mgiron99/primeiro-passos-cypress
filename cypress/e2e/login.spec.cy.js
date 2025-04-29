describe('Orange HRM tests', () => {
  it('Login Success ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module").should('contain.text', 'Dashboard')
    cy.get('.oxd-brand-banner > img').should('be.visible')
  })
  it('Login Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin')
    cy.get("button[type='submit']").click()
    cy.get("[role='alert']").should('have.text', 'Invalid credentials')
  })
})