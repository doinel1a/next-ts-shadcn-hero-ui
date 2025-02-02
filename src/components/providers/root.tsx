import React from 'react';

import type { PropsWithChildren } from 'react';

import HeroUiProvider from './hero-ui';
import TanstackQueryProvider from './tanstack-query';
import ThemeProvider from './theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <HeroUiProvider>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </HeroUiProvider>
  );
}
