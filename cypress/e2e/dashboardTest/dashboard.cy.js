import userData from '../../fixtures/users/userData.json'
import LoginTest from '../loginTest/appDrive'
import dashboardTest from "./appDrive"

const login = new LoginTest()
const dashboard = new dashboardTest()

describe('checking Dashboard Grid', () => {
    it('login into the website', () => {
    login.accessLoginPage() 
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.dashboardLocation()
    dashboard.dashboardGridCheck()
    });

});