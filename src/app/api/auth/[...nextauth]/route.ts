import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";

// Créer le handler NextAuth
const handler = NextAuth(authOptions);

// Exporter pour GET et POST
export { handler as GET, handler as POST };