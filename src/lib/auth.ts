import { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongo";
import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User"
const name="abhijeet";
export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: { prompt: "select_account" }, // always show account chooser
            },
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: { strategy: "jwt" },
    callbacks: {
        async signIn({ user }) {
            // Update custom fields like lastLoginAt
            await connectToDatabase();
            await User.updateOne(
                { email: user.email },
                { $set: { lastLoginAt: new Date() } },
                { upsert: false } // don't duplicate users, adapter already inserts them
            );
            return true;
        },
        async session({ session }) {
            if (!session.user?.email) return session;
            await connectToDatabase();
            const dbUser = await User.findOne({ email: session.user.email });

            if (dbUser) {
                session.user.id = dbUser._id.toString();
                session.user.lastLoginAt = dbUser.lastLoginAt;
            }

            return session;
        },
    },
};
