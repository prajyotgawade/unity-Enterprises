"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      {children}
    </ThemeProvider>
  );
}


