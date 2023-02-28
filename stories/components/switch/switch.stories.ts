import type { Meta, StoryObj } from '@storybook/html';
import type { SwitchArgs } from './Switch';
import { createSwitch } from './Switch';

const meta = {
  title: 'Components/Switch',
  render: args => createSwitch(args),
  parameters: {
    docs: {
      description: {
        component: 'Base class: `switch`',
      },
    },
  },
  args: {
    size: 'small',
    isDisabled: false,
  },
  argTypes: {
    size: {
      table: {
        defaultValue: { summary: 'small' },
        type: {
          summary: 'switch-md',
          detail: '- small: @default\n- medium: switch-md',
        },
      },
      options: ['small', 'medium'],
      control: {
        type: 'radio',
      },
      description: 'Set the size of the switch',
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
