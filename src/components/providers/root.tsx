import React from 'react';

import type { PropsWithChildren } from 'react';

import HeroUiProvider from './client/hero-ui';
import TanstackQueryProvider from './client/tanstack-query';
import ThemeProvider from './client/theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: Readonly<TRootProvider>) {
  return (
    <HeroUiProvider>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </HeroUiProvider>
  );
}
