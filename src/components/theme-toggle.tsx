'use client';

import React from 'react';

import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { IconDeviceLaptop, IconMoonStars, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown className='min-w-32'>
      <DropdownTrigger>
        <Button data-testid='theme-toggle' variant='bordered' isIconOnly>
          <IconSun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <IconMoonStars className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu data-testid='theme-dropdown-content'>
        <DropdownItem
          key='theme-light'
          data-testid='theme-light'
          onPress={() => {
            setTheme('light');
          }}
        >
          <div className='flex items-center'>
            <IconSun className='mr-2 h-[1.2rem] w-[1.2rem]' />
            <span>Light</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-dark'
          data-testid='theme-dark'
          onPress={() => {
            setTheme('dark');
          }}
        >
          <div className='flex items-center'>
            <IconMoonStars className='mr-2 h-[1.2rem] w-[1.2rem]' />
            <span>Dark</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-system'
          data-testid='theme-system'
          onPress={() => {
            setTheme('system');
          }}
        >
          <div className='flex items-center'>
            <IconDeviceLaptop className='mr-2 h-[1.2rem] w-[1.2rem]' />
            <span>System</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
