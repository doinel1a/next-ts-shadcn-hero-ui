'use client';

import React from 'react';

import type { PropsWithChildren } from 'react';

import { HeroUIProvider } from '@heroui/system';

type THeroUiProvider = PropsWithChildren;

export default function HeroUiProvider({ children }: THeroUiProvider) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
