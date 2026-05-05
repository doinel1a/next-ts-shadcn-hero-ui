'use client';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/system';

type THeroUiProvider = Readonly<PropsWithChildren>;

export default function HeroUiProvider({ children }: THeroUiProvider) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
