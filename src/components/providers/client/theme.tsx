'use client';

import type { ThemeProviderProps } from 'next-themes';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import storageKeys from '@/lib/constants/keys';

export default function ThemeProvider({ children, ...properties }: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      storageKey={storageKeys.theme}
      disableTransitionOnChange
      enableSystem
      {...properties}
    >
      {children}
    </NextThemesProvider>
  );
}
