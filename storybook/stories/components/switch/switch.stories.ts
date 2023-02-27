import type { Meta, StoryObj } from '@storybook/html';
import { createSwitch } from './create-switch';

const meta = {
  title: 'Components/Switch',
  args: {
    size: 'small',
    isDisabled: false,
  },
  argTypes: {
    size: {
      table: { defaultValue: { summary: 'small' } },
      options: ['small', 'medium'],
      control: {
        type: 'radio',
      },
      description: 'Set the size of the switch.<br>Class: `.switch-md`',
    },
    isDisabled: {
      description:
        'Set the switch to disabled.<br>Targets the `disabled` attribute from the input.',
      table: { defaultValue: { summary: 'false' } },
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof createSwitch>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  render: ({ args }) => createSwitch(args),
};
