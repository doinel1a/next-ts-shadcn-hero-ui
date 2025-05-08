'use client';

import React from 'react';

import type { ThemeProviderProps } from 'next-themes';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

import EStorageKeys from '@/lib/constants/keys';

export default function ThemeProvider({ children, ...properties }: Readonly<ThemeProviderProps>) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='system'
      storageKey={EStorageKeys.theme}
      disableTransitionOnChange
      enableSystem
      {...properties}
    >
      {children}
    </NextThemesProvider>
  );
}
