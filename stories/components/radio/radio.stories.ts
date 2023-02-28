import type { Meta, StoryObj } from '@storybook/html';
import type { RadioArgs } from './Radio';
import { createRadio } from './Radio';

const meta = {
  title: 'Components/Radio',
  render: args => createRadio(args),
  parameters: {
    docs: {
      description: {
        component: 'Base class: `radio`',
      },
    },
  },
  args: {
    isDisabled: false,
  },
  argTypes: {
    isDisabled: {
      description:
        'Disables the radio input.<br><br>Use the `disabled` attribute.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<RadioArgs>;

type Story = StoryObj<RadioArgs>;

export default meta;

export const Default: Story = {};

/**
 * To use another element as the radio input label, add the `.radio-label` class to it and the element will inherit the styles.
 */
export const CustomLabel: Story = {
  render: () => `
    <label class="inline-flex items-center" for="radio">
      <input id="radio" type="radio" class="radio" />
      <div class="radio-label">I'm a &lt;div/&gt;</div>
    </label>
  `,
};
