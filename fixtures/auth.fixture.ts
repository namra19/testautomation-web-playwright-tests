import { test as base } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage';
import { UserRole, users } from '../utils/testData';

type Fixtures = {
    loginAs: (role: UserRole) => Promise<void>;
};

export const test = base.extend<Fixtures>({
    loginAs: async ({ page }, use) => {
        await use(async (role) => {
            const login = new LoginPage(page);
            await login.navigate();
            await login.login(
                users[role].email,
                users[role].password
            );
        });
       
    }
});

