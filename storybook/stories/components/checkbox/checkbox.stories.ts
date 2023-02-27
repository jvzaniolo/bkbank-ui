import type { Meta, StoryObj } from '@storybook/html';
import type { CheckboxArgs } from './create-checkbox';
import { createCheckbox } from './create-checkbox';

const meta = {
  title: 'Components/Checkbox',
  render: args => createCheckbox(args),
  parameters: {
    docs: {
      description: {
        component:
          'To use the checkbox component, add the `.checkbox` class to the `input` element.<br>For the label, you can either use a `span` or `label` tag or apply the `.checkbox-label` class to another element.<br>Base class: `.checkbox`. States: `.checkbox-{error}`.',
      },
    },
  },
  args: {
    base: 'checkbox',
    state: undefined,
    isDisabled: false,
    indeterminate: false,
    defaultChecked: false,
  },
  argTypes: {
    base: {
      description: 'Base class for the checkbox component.',
      table: { defaultValue: { summary: 'checkbox' } },
      control: { type: '' },
    },
    state: {
      description: 'Available states for the checkbox.',
      options: [undefined, 'checkbox-error'],
      table: { defaultValue: { summary: 'undefined' } },
      control: { type: 'radio' },
    },
    isDisabled: {
      description:
        'Disables the checkbox.<br><br>Use the `:disabled` attribute.',
      table: { defaultValue: { summary: false } },
    },
    defaultChecked: {
      description:
        'Sets the checkbox to checked by default.<br><br>Use the `:checked` attribute.',
      table: { defaultValue: { summary: false } },
    },
    indeterminate: {
      description:
        'Sets the checkbox to indeterminate.<br><br>Use the `indeterminate` attribute (JavaScript only).',
      table: { defaultValue: { summary: false } },
    },
  },
} satisfies Meta<CheckboxArgs>;

type Story = StoryObj<CheckboxArgs>;

export default meta;

export const Default: Story = {};

/**
 * To use another element as the checkbox input label, add the `.checkbox-label` class to it and the element will inherit the styles.
 */
export const CustomLabel: Story = {
  render: () => `
    <label class="inline-flex items-center">
      <input id="checkbox" type="checkbox" class="checkbox" />
      <div class="checkbox-label">I'm a &lt;div/&gt;</div>
    </label>
  `,
};
