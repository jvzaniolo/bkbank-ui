import type { Meta, StoryObj } from '@storybook/html';
import type { SwitchArgs } from './create-switch';
import { createSwitch } from './create-switch';

const meta = {
  title: 'Components/Switch',
  render: args => createSwitch(args),
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
} satisfies Meta<SwitchArgs>;

type Story = StoryObj<SwitchArgs>;

export default meta;

export const Default: Story = {};
