class myInfoTest {

    selectorList () {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameInput: "[name='firstName']",
            middleNameInput: "[name='middleName']",
            lastNameInput: "[name='lastName']",
            genericField: ".oxd-input.oxd-input--active",
            dateField:"[placeholder='yyyy-dd-mm']",
            closeButton: '.--close',
            submitButton: '[type=submit]',
            successAlert: 'body',
            genericComboBox: '.oxd-select-text--active',
            genericComboBoxOptionList:'.oxd-select-dropdown',
            checkGender: '.oxd-radio-wrapper'
        }

        return selectors
    }
getIntheMyInfoPage() {
    cy.get(this.selectorList().myInfoButton).click()
}
    fillOutMyPersonalDetais(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorList().myInfoButton).click()
        cy.get(this.selectorList().firstNameInput).clear().type(firstName)
        cy.get(this.selectorList().middleNameInput).clear().type(middleName)
        cy.get(this.selectorList().lastNameInput).clear().type(lastName)
        cy.get(this.selectorList().genericField).eq(3).clear().type(nickName)
    }

    fillOutEmployeeDetails(employeeId, otherId, dlNumber, dlDate, ssnNumber, sinNumber, dob){
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(dlNumber)
        cy.get(this.selectorList().genericField).eq(7).clear().type(dlDate ,{force: true})
        cy.get(this.selectorList().closeButton).eq(0).click()
        cy.get(this.selectorList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorList().genericField).eq(9).clear().type(sinNumber)
        cy.get(this.selectorList().genericField).eq(10).clear().type(dob, {force: true})
        cy.get(this.selectorList().closeButton).click({force: true})
        
    }
    fillOutStatus(){
        cy.get(this.selectorList().genericComboBox).eq(0).click()
        cy.get(this.selectorList().genericComboBoxOptionList).contains('Brazilian').click()
        cy.get(this.selectorList().genericComboBox).eq(1).click()
        cy.get(this.selectorList().genericComboBoxOptionList).contains('Other').click()
        cy.get(this.selectorList().genericComboBox).eq(2).click()
        cy.get(this.selectorList().genericComboBoxOptionList).contains('AB+').click()
        cy.get(this.selectorList().checkGender).eq(0).contains('Male').click()

    }
    saveAndSubmitt() {
        cy.get(this.selectorList().submitButton).eq(0).click()
        cy.get(this.selectorList().successAlert).should('contain', 'Successfully Updated')
    }
}

export default myInfoTest