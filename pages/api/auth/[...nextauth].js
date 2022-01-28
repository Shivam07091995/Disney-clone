import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../firebase";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  adapter: FirebaseAdapter(db),
});
