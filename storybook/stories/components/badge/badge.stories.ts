import type { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'The `badge` component is used to represent a notification. Badges should **always have a text content**.<br>Base class: `.badge`. Colors: `.badge-{highlight}`.',
      },
    },
  },
  args: {
    content: '32',
  },
  argTypes: {
    content: {
      description: 'Change the content of the badge in the example.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  render: ({ args }) =>
    `<div class="badge badge-highlight">${args.content}</div>`,
};
