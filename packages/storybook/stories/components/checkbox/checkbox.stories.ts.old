import type { Meta, StoryObj } from '@storybook/html';
import type { CheckboxArgs } from './Checkbox';
import { createCheckbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  render: args => createCheckbox(args),
  parameters: {
    docs: {
      description: {
        component:
          'Checkboxes are used to select one or more options from a list of options.<br>Base class: `checkbox`',
      },
    },
  },
  argTypes: {
    isChecked: {
      description:
        'Sets the checkbox to checked by default.<br><br>Use the `:checked` attribute.',
      table: { defaultValue: { summary: false } },
    },
    isInvalid: {
      description:
        'Sets the checkbox to invalid.<br><br>Use the `:invalid` attribute.',
      table: { defaultValue: { summary: false } },
    },
    isDisabled: {
      description:
        'Disables the checkbox.<br><br>Use the `:disabled` attribute.',
      table: { defaultValue: { summary: false } },
    },
    isIndeterminate: {
      description:
        'Sets the checkbox to indeterminate.<br><br>Use the `indeterminate` property (JavaScript only).',
      table: { defaultValue: { summary: false } },
    },
  },
} satisfies Meta<CheckboxArgs>;

type Story = StoryObj<CheckboxArgs>;

export default meta;

export const Default: Story = {
  args: {
    isChecked: false,
    isInvalid: false,
    isDisabled: false,
    isIndeterminate: false,
  },
};

export const CustomLabel: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'To use another element as the checkbox input label, add the `.checkbox-label` class to it and the element will inherit the styles.',
      },
    },
  },
  render: () => `
    <label class="inline-flex items-center">
      <input id="checkbox" type="checkbox" class="checkbox" />
      <div class="checkbox-label">I'm a &lt;div/&gt;</div>
    </label>
  `,
};
