
import { test } from '../../fixtures/auth.fixture';
import { HomePage } from '../../page-objects/HomePage';
import { LoginPage } from '../../page-objects/LoginPage';
import { UserRole, positiveRoles, negativeRoles } from '../../utils/testData';

// const roles: UserRole[] = ['adminUser', 'guestUser', 'devUser'];

//Positive login tests for all users
test.describe.parallel('Login tests - Positive and Negative', () => {

    //Positive login tests
    for (const role of positiveRoles) {
        test(`Positive login as ${role}`, async ({ page, loginAs }) => {
            const home = new HomePage(page);
            await loginAs(role);

            //Verify home page element (content section)
            await home.verifyUserIsLoggedIn();

        });
    }


    //Negative login tests

    negativeRoles.forEach(({ name, data }) => {
        test(`Negative login - ${name}`, async ({ page, loginAs }) => {
            const login = new LoginPage(page);
            await loginAs(data as UserRole);

            //Verify error message 
            await login.assertErrorMessageVisible();

            //Verify login page is still visible
            await login.assertLoginPageVisible();

        });
    });

});