'use client';

import type { ThemeProviderProps } from 'next-themes';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import storageKeys from '@/lib/constants/keys';

type TThemeProvider = Readonly<ThemeProviderProps>;

export default function ThemeProvider({ children, ...properties }: TThemeProvider) {
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
