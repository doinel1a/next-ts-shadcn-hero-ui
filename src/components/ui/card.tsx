/* eslint-disable @typescript-eslint/no-restricted-imports */

import * as React from 'react';

import { cn } from '@/lib/utils';

function Card({
  className,
  size = 'default',
  ...properties
}: React.ComponentProps<'div'> & { size?: 'default' | 'sm' }) {
  return (
    <div
      data-slot='card'
      data-size={size}
      className={cn(
        'ring-foreground/10 bg-card text-card-foreground group/card flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
        className
      )}
      {...properties}
    />
  );
}

function CardHeader({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-header'
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3',
        className
      )}
      {...properties}
    />
  );
}

function CardTitle({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-title'
      className={cn(
        'text-base leading-snug font-medium group-data-[size=sm]/card:text-sm',
        className
      )}
      {...properties}
    />
  );
}

function CardDescription({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-description'
      className={cn('text-muted-foreground text-sm', className)}
      {...properties}
    />
  );
}

function CardAction({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-action'
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...properties}
    />
  );
}

function CardContent({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-content'
      className={cn('px-4 group-data-[size=sm]/card:px-3', className)}
      {...properties}
    />
  );
}

function CardFooter({ className, ...properties }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='card-footer'
      className={cn(
        'bg-muted/50 flex items-center rounded-b-xl border-t p-4 group-data-[size=sm]/card:p-3',
        className
      )}
      {...properties}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };
