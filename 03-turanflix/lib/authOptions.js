import GoogleProvider from "next-auth/providers/google";
import connectToDb from "./database";
import User from "@/models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // invoked on successful sign in
    async signIn({ profile }) {
      // 1. connect to db
      await connectToDb();
      // 2. check if user exists
      const user = await User.findOne({ email: profile.email });
      // 3. if not, create user
      if (!user) {
        // Truncate the user email to 30 characters
        const username = profile.name.slice(0, 30);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // 4. return true to allow sign in
      return true;
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from db
      const user = await User.findOne({ email: session.user.email });
      // 2. Assign the user id to the session
      session.user.id = user._id.toString();
      // 3. Return the session
      return session;
    },
  },
};
