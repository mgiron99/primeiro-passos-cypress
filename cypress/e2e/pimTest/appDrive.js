class pimTest {

    selectorList() {
        const selectors = {
            pimGrid: ".oxd-main-menu-item-wrapper",
            selectBoxes: ".oxd-select-text--active",
            employeeAndSupervisor: "[placeholder='Type for hints...']",
            employeeID: ".oxd-input--active[data-v-1f99f73c='']",
            addButton: ".oxd-button[type='button']",
            firstNameAdd: ".oxd-input--active",
            middleNameAdd: ".oxd-input--active",
            lastNameAdd: ".oxd-input--active",
            emplyeeIdAdd: ".oxd-input--active",
            createLoginDetails: ".--label-right",
            usarnameAdd: ".oxd-input--active",
            passwordAdd:".oxd-input--active",
            confirmPasswordAdd:".oxd-input--active",
            statusAdd: ".oxd-radio-wrapper",
            saveAdd: ".oxd-button",
        }

        return selectors
    }
    
    getInThePimPage() {
        cy.get(this.selectorList().pimGrid).eq(1).click()
    }
    fillingOutEmployeeInfo(firstNameAdd, middleNameAdd, lastNameAdd, employeeID, usernameAdd, passwordAdd, confirmPassword) {
        cy.get(this.selectorList().addButton).click()
        cy.get(this.selectorList().firstNameAdd).eq(1).clear().type(firstNameAdd)
        cy.get(this.selectorList().middleNameAdd).eq(1).clear().type(middleNameAdd)
        cy.get(this.selectorList().lastNameAdd).eq(2).clear().type(lastNameAdd)
        cy.get(this.selectorList().employeeID).eq(3).clear().type(employeeID)
        cy.get(this.selectorList().createLoginDetails).click()
        cy.get(this.selectorList().usarnameAdd).eq(5).clear().type(usernameAdd)
        cy.get(this.selectorList().passwordAdd).eq(6).clear().type(passwordAdd)
        cy.get(this.selectorList().confirmPasswordAdd).eq(6).clear().type(confirmPassword)
        cy.get(this.selectorList().statusAdd).eq(1).click()
        cy.get(this.selectorList().saveAdd).eq(1).click()
    }
}

export default pimTest