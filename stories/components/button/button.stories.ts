import type { Meta, StoryObj } from '@storybook/html';
import type { ButtonArgs } from './Button';
import { createButton } from './Button';

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  render: args => createButton(args),
  parameters: {
    docs: {
      description: {
        component:
          'The `button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.<br>Base class: `btn`',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Change the size of the button',
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      table: {
        defaultValue: { summary: 'small' },
        type: {
          summary: 'btn-{md|lg}',
          detail: '- small: @default\n- medium: btn-md\n- large: btn-lg',
        },
      },
    },
    variant: {
      description: 'Change the variant of the button',
      control: { type: 'radio' },
      options: ['unstyled', 'solid', 'outline', 'ghost'],
      table: {
        defaultValue: { summary: 'unstyled' },
        type: {
          summary: 'btn-{solid|outline|ghost}',
          detail:
            '- unstyled: @default\n- solid: btn-solid\n- outline: btn-outline\n- ghost: btn-ghost',
        },
      },
    },
    color: {
      description: 'Change the color of the button',
      control: { type: 'radio' },
      options: ['unstyled', 'primary', 'secondary'],
      table: {
        defaultValue: { summary: 'unstyled' },
        type: {
          summary: 'btn-{primary|secondary}',
          detail:
            '- unstyled: @default\n- primary: btn-primary\n- secondary: btn-secondary',
        },
      },
    },
    isDisabled: {
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
    size: 'small',
    variant: 'solid',
    color: 'primary',
    isDisabled: false,
    withIcon: false,
  },
};

export const IconButton: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `btn-icon` class to create an icon button. Works with every size, variant and color.',
      },
    },
  },
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
