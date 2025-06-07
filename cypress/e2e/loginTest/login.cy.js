import userData from '../../fixtures/users/userData.json'
import LoginTest from '../loginTest/appDrive'
import dashboardTest from '../dashboardTest/appDrive'
const login = new LoginTest() 
const dashboard = new dashboardTest()
describe('Orange HRM tests', () => {
  it('succesfull login', () => {
    login.accessLoginPage() 
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
  });

  it('failed Login', () => {
    login.accessLoginPage()
    login.failStatusLogin(userData.userFail.username, userData.userFail.password)
  });
})