'use client';

import { Toaster } from 'sonner'; // ✅ Import direct depuis le package officiel
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            {children}
            <Toaster richColors position="top-right" /> {/* ✅ Important : en dehors du flow logique */}
          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};
