import type { Meta, StoryObj } from '@storybook/html';
import type { ButtonArgs } from './create-button';
import { createButton } from './create-button';

const meta = {
  title: 'Components/Button',
  render: args => createButton(args),
  parameters: {
    docs: {
      description: {
        component:
          'The `button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.',
      },
    },
  },
  args: {
    base: 'btn',
    size: undefined,
    variant: undefined,
    color: undefined,
    disabled: false,
    withIcon: false,
  },
  argTypes: {
    base: {
      description: 'Base class for the button component.',
      table: { defaultValue: { summary: 'btn' } },
      control: { type: '' },
    },
    size: {
      description: 'Available sizes for the button',
      table: { defaultValue: { summary: 'undefined' } },
      options: [undefined, 'btn-md', 'btn-lg'],
      control: { type: 'radio' },
    },
    variant: {
      description: 'Available variants for the button',
      table: { defaultValue: { summary: 'undefined' } },
      options: [undefined, 'btn-solid', 'btn-outline', 'btn-ghost'],
      control: { type: 'radio' },
    },
    color: {
      description:
        'Available colors for the button. Needs a variant to be applied.',
      options: [undefined, 'btn-primary', 'btn-secondary'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      description:
        'Toggles the disabled state of the button.<br><br>Use the `:disabled` to apply styles.',
      table: {
        defaultValue: { summary: false },
      },
    },
    withIcon: {
      description: 'Toggles the icon state of the button.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<ButtonArgs>;

type Story = StoryObj<ButtonArgs>;

export default meta;

export const Default: Story = {
  args: {
    color: 'btn-primary',
    variant: 'btn-solid',
    base: 'btn',
    size: undefined,
    disabled: false,
  },
};

/**
 * Use the `btn-icon` class to create an icon button. Works with every variant.
 */
export const IconButton: Story = {
  render: () => `
  <div class="flex items-center gap-2">
    <button type="button" class="btn btn-icon btn-solid btn-primary">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <button type="button" class="btn btn-icon btn-outline btn-primary">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
    <button type="button" class="btn btn-icon btn-ghost btn-primary">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
  `,
};
