import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string | null;
            email?: string | null;
            image?: string | null;
            id?: string;
            lastLoginAt?: Date | string;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id?: string;
        lastLoginAt?: string;
    }
}


