import userData from '../../fixtures/users/userData.json'
import LoginTest from '../loginTest/appDrive'
import myInfoTest from '../myInfoTest/appDrive'

const login = new LoginTest
const myInfo = new myInfoTest

describe('Filling out all my informartions on the my info section', () => {
    it('fill out my info', () => {
        login.accessLoginPage()
        login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        myInfo.getIntheMyInfoPage()
        myInfo.fillOutMyPersonalDetais('Matheus', 'De Lima', 'Giron', 'Theus')
        myInfo.fillOutEmployeeDetails('123456', '654321', '199954', '2025-12-31', '99999', '88888', '1999-03-11')
        myInfo.fillOutStatus()
        myInfo.saveAndSubmitt()
    });
});