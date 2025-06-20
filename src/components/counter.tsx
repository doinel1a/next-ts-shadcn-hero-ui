'use client';

import React, { useState } from 'react';

import { Button } from '@heroui/button';

import { Card, CardContent, CardHeader } from './ui/card';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className='border-border bg-secondary w-72 border shadow-md'>
      <CardHeader>
        <h1 className='text-2xl'>Next TypeScript</h1>
        <h2 className='text-lg'>with shadcn/ui</h2>
      </CardHeader>
      <CardContent className='flex w-full items-center justify-between'>
        <Button
          color='primary'
          className='rounded-full'
          data-testid='increase-count'
          isIconOnly
          onPress={() => {
            setCount((previousCount) => previousCount + 1);
          }}
        >
          + 1
        </Button>

        <h2 className='text-6xl' data-testid='count'>
          {count}
        </h2>

        <Button
          color='primary'
          className='rounded-full'
          data-testid='decrease-count'
          isIconOnly
          onPress={() => {
            setCount((previousCount) => previousCount - 1);
          }}
        >
          - 1
        </Button>
      </CardContent>
    </Card>
  );
}
