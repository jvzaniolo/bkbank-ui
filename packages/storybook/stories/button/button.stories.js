import { createButton } from './button';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'small',
    disabled: false,
    text: 'Shop now',
  },
  argTypes: {
    color: {
      description: 'Change the color of the button',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      description: 'Change the variant of the button',
      options: ['solid', 'outline', 'ghost'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      description: 'Change the size of the button',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    disabled: {
      description: 'Toggles the disabled state of the button',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const Default = args => createButton(args);
