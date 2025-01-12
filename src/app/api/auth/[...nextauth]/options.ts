import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "/signInLogo.png", // Absolute URL to image
    buttonText: "", // Hex color code
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Demo username = 'testuser'",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Demo password = 'nextauth'",
        },
      },
      async authorize(credentials) {
        // Hard-coded test-user credentials -> use DB in production-ready app
        const user = { id: "1", name: "testuser", password: "nextauth" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
};
