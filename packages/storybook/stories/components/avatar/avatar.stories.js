import { createAvatar } from './create-avatar';

export default {
  title: 'Components/Avatar',
  parameters: {
    docs: {
      description: {
        component:
          'The `avatar` component is used to represent a user, and displays the profile photo, initials, or icon.<br>Base class: `.avatar`. Sizes: `.avatar-{md|lg}`. Colors: `.avatar-{primary|high}`. States: `.avatar-active`.',
      },
    },
  },
  args: {
    size: 'small',
    color: 'primary',
    isActive: 'false',
    content: 'icon',
  },
  argTypes: {
    size: {
      description:
        'Change the size of the avatar.<br><br>Class: `.avatar-{md|lg}`.',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    color: {
      description:
        'Change the color of the avatar.<br><br>Class: `.avatar-{primary|high}`.',
      options: ['primary', 'high'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    isActive: {
      description:
        'Change the state of the avatar.<br><br>Class: `.avatar-active`.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    content: {
      description: 'Change the content of the avatar in the example.',
      options: ['icon', 'text', 'image'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'icon' },
      },
    },
  },
};

export const Default = args => createAvatar(args);
