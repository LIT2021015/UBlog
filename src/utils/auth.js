import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export const authOptions = {
   adapter: PrismaAdapter(prisma),
  pages:{

  signIn:'/login'

  },

  session: {
    strategy: "jwt",
  },



  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,


    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],



};

export const getAuthSession = () => getServerSession(authOptions);
