import type { PropsWithChildren } from 'react';

import HeroUiProvider from './client/hero-ui';
import TanstackQueryProvider from './client/tanstack-query';
import ThemeProvider from './client/theme';

type TRootProvider = Readonly<PropsWithChildren>;

export default function RootProvider({ children }: TRootProvider) {
  return (
    <HeroUiProvider>
      <ThemeProvider>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </ThemeProvider>
    </HeroUiProvider>
  );
}
