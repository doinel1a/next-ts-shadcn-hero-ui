'use client';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/system';

type THeroUiProvider = PropsWithChildren;

export default function HeroUiProvider({ children }: Readonly<THeroUiProvider>) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
