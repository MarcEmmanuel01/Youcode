import { DefaultSession, DefaultUser } from "next-auth";
import { AdapterUser } from "@auth/core/adapters";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      image?: string | null;
    };
  }

  interface User extends AdapterUser {
    id: string;
    image?: string | null;
  }
}