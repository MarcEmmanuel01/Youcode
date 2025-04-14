import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession, type NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";
import { env } from "@/lib/env";
import { Session } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  session: {
    strategy: "database", // Stocker les sessions dans la base de données
  },
  secret: env.NEXTAUTH_SECRET,
  theme: {
    logo: "/images/logo-text.png", // Logo pour la page de connexion
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
};

// Fonction utilitaire pour récupérer la session côté serveur
export const getAuthSession = () => getServerSession(authOptions);