
import { test } from '../../fixtures/auth.fixture';
import { HomePage } from '../../page-objects/HomePage';
import { users, UserRole } from '../../utils/testData';

const roles: UserRole[] = ['adminUser', 'guestUser', 'devUser'];

test.describe.parallel('All users valid login tests', () => {
    for (const role of roles) {
        test(`login as ${role}`, async ( {page, loginAs}) => {
            const home = new HomePage(page);

            await loginAs(role);
            await home.verifyUserIsLoggedIn();

        });

    }
});
  