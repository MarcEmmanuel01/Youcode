// app/src/api/auth/[...nextauth]/nextauth.d.
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      id?: string;
    };
  }
}