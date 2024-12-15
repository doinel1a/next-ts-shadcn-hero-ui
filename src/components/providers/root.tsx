import React from 'react';

import type { PropsWithChildren } from 'react';

import NextUiProvider from './next-ui';
import ThemeProvider from './theme';

type TRootProvider = PropsWithChildren;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <NextUiProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextUiProvider>
  );
}
