import { heroui } from '@heroui/theme';

// based on shadcn's styles
const heroUIStyleOverride = {
  layout: {
    disabledOpacity: '0.5', // shadcn: 0.9
    radius: {
      small: 'calc(var(--radius) - 4px)',
      medium: 'calc(var(--radius) - 2px)',
      large: 'var(--radius)'
    },
    borderWidth: {
      small: '0.5px',
      medium: '1px',
      large: '2px'
    }
  }
};

export default heroui(heroUIStyleOverride);
