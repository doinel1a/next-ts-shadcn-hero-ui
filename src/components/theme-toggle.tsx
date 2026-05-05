'use client';

import { Button } from '@heroui/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown';
import { IconDeviceLaptop, IconMoonStars, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown className='min-w-28'>
      <DropdownTrigger>
        <Button data-testid='theme-toggle' variant='bordered' isIconOnly>
          <IconSun className='size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <IconMoonStars className='absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu data-testid='theme-dropdown-content'>
        <DropdownItem
          key='theme-light'
          textValue='Light'
          data-testid='theme-light'
          onPress={() => {
            setTheme('light');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <IconSun className='size-5' />
            <span>Light</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-dark'
          textValue='Dark'
          data-testid='theme-dark'
          onPress={() => {
            setTheme('dark');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <IconMoonStars className='size-5' />
            <span>Dark</span>
          </div>
        </DropdownItem>
        <DropdownItem
          key='theme-system'
          textValue='System'
          data-testid='theme-system'
          onPress={() => {
            setTheme('system');
          }}
        >
          <div className='flex items-center gap-x-2'>
            <IconDeviceLaptop className='size-5' />
            <span>System</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
