export const users = {
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
}

export type UserRole = keyof typeof users; 