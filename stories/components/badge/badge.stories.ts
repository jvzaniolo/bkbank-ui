import type { Meta, StoryObj } from '@storybook/html';
import clsx from 'clsx';

const meta = {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'The `badge` component is used to represent a notification. Badges should **always have a text content**.',
      },
    },
  },
  args: {
    base: 'badge',
    color: undefined,
    content: '32',
  },
  argTypes: {
    base: {
      description: 'Base class for the badge.',
      control: { type: '' },
      table: { defaultValue: { summary: 'badge' } },
    },
    color: {
      description: 'Available colors for the badge.',
      options: [undefined, 'badge-highlight'],
      control: { type: 'radio', labels: { undefined: 'unstyled' } },
    },
    content: {
      description: 'Change the content of the badge in the example.',
      control: { type: 'text' },
    },
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  args: {
    color: 'badge-highlight',
  },
  render: args =>
    `<div class="${clsx(args.base, args.color)}">${args.content}</div>`,
};
