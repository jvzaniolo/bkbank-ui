import type { Meta, StoryObj } from '@storybook/html';
import clsx from 'clsx';

const meta = {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'Badges are used to inform the user of the status of specific data. Badges should **always have a text content**.',
      },
    },
  },
  args: {
    color: undefined,
    content: '32',
  },
  argTypes: {
    color: {
      description: 'Change the color of the badge.',
      options: ['unstyled', 'highlight'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'unstyled' },
        type: {
          summary: 'badge-highlight',
          detail: '- unstyled: @default\n- highlight: badge-highlight',
        },
      },
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
    color: 'highlight',
  },
  render: args =>
    `<div class="${clsx(
      'badge',
      args.color === 'highlight' && 'badge-highlight',
    )}">${args.content}</div>`,
};
