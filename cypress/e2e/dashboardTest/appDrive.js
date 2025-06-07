class dashboardTest {

    selectorList() {
        const selectors = {
            adminGrid: ".oxd-main-menu-item-wrapper",
            pimGrid: ".oxd-main-menu-item-wrapper",
            leaveGrid: ".oxd-main-menu-item-wrapper",
            timeGrid: ".oxd-main-menu-item-wrapper",
            recruitmentGrid: ".oxd-main-menu-item-wrapper",
            myInfoGrid: ".oxd-main-menu-item-wrapper",
            performanceGrid: ".oxd-main-menu-item-wrapper",
            dashboardGrid: ".oxd-main-menu-item-wrapper",
            directoryGrid: ".oxd-main-menu-item-wrapper",
            maintenanceGrid: ".oxd-main-menu-item-wrapper",
            claimGrid: ".oxd-main-menu-item-wrapper",
            
        }

        return selectors
    }

    dashboardLocation() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    }
        dashboardGridCheck() {
            cy.get(this.selectorList().dashboardGrid).eq(7).should('contain', 'Dashboard')
        }
}

export default dashboardTest