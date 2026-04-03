export const users = {

    // Positive tests users
    adminUser: {
        email: 'admin@admin.com',
        password: '2020'
    },
    guestUser: {
        email: 'biancunha@gmail.com',
        password: '123456'
    },
    devUser: {
        email: 'growdev@growdev.com.br',
        password: 'growdev123',
    },

    // Negative tests users
     invalidEmail: {
            email: 'wrong@example.com',
            password: '123456'
        },
        invalidPassword: {
            email: 'admin@admin.com',
            password: 'wrongpass'
        },
        emptyCredentials: {
            email: '',
            password: ''
        },
        invalidFormat: {
            email: 'not-an-email',
            password: '123456'
        }

}

export type UserRole = keyof typeof users; 

//Array for iteration
export const positiveRoles: UserRole[] = ['adminUser', 'guestUser', 'devUser'];
export const negativeRoles: { name: string, data: UserRole} [] = [
   {name: 'Invalid email + valid password', data: 'invalidEmail'},
   {name: 'Valid email + invalid password', data: 'invalidPassword'},
   {name: 'Empty credentials', data: 'emptyCredentials'}
]