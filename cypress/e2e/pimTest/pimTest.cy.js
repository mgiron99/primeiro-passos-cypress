import userData from '../../fixtures/users/userData.json'
import LoginTest from '../loginTest/appDrive'
import pimTest from '../pimTest/appDrive'

const login = new LoginTest
const pim = new pimTest

describe('filling out the informations on the PIM page', () => {
    it('filling out PIM test', () => {
        login.accessLoginPage()
        login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        pim.getInThePimPage()
        pim.fillingOutEmployeeInfo('Matheus', 'De Lima', 'Giron', '99999', 'mgiron', 'm1234567', 'm1234567')
        
    });
});