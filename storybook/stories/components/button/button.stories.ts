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
          'The `button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.<br>Base class: `.btn`. Sizes: `.btn-{md|lg}`. Variants: `.btn-{solid|outline|ghost}`. Colors: `.btn-{primary|secondary}`.',
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
      table: { defaultValue: { summary: 'Small' } },
      options: [undefined, 'btn-md', 'btn-lg'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Small',
          'btn-md': 'Medium',
          'btn-lg': 'Large',
        },
      },
    },
    variant: {
      description: 'Available variants for the button',
      table: { defaultValue: { summary: 'Unstyled' } },
      options: [undefined, 'btn-solid', 'btn-outline', 'btn-ghost'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Unstyled',
          'btn-solid': 'Solid',
          'btn-outline': 'Outline',
          'btn-ghost': 'Ghost',
        },
      },
    },
    color: {
      description:
        'Available colors for the button. Needs a variant to be applied.',
      options: [undefined, 'btn-primary', 'btn-secondary'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Unstyled',
          'btn-primary': 'Primary',
          'btn-secondary': 'Secondary',
        },
      },
      table: {
        defaultValue: { summary: 'Unstyled' },
      },
    },
    disabled: {
      description: 'Toggles the disabled state of the button',
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
  },
};

/**
 * Available sizes for the button component.
 *
 * Small: `@default`
 * Medium: `btn-md`
 * Large: `btn-lg`
 */
export const Sizes: Story = {
  args: {
    color: 'btn-primary',
    variant: 'btn-solid',
  },
  render: args => `
    <div class="flex items-center gap-2">
      ${createButton(args)}
      ${createButton({ ...args, size: 'btn-md' })}
      ${createButton({ ...args, size: 'btn-lg' })}
    </div>
  `,
};

/**
 * Available variants for the button component.
 *
 * Unstyled: `@default`
 * Solid: `btn-solid`
 * Outline: `btn-outline`
 * Ghost: `btn-ghost`
 */
export const Variants: Story = {
  args: {
    color: 'btn-primary',
  },
  render: args => `
    <div class="flex items-center gap-2">
      ${createButton(args)}
      ${createButton({ ...args, variant: 'btn-solid' })}
      ${createButton({ ...args, variant: 'btn-outline' })}
      ${createButton({ ...args, variant: 'btn-ghost' })}
    </div>
  `,
};

/**
 * Available colors for the button component. Works with every variant.
 *
 * Unstyled: `@default`
 * Primary: `btn-primary`
 * Secondary: `btn-secondary`
 */
export const Colors: Story = {
  args: {
    variant: 'btn-solid',
  },
  render: args => `
    <div class="flex items-center gap-2">
      ${createButton(args)}
      ${createButton({ ...args, color: 'btn-primary' })}
      ${createButton({ ...args, color: 'btn-secondary' })}
    </div>
  `,
};

/**
 * Available states for the button component. Target the `:disabled` pseudo-class to apply styles.
 *
 * Unstyled: `@default`
 * Disabled: `:disabled`
 */
export const State: Story = {
  args: {
    variant: 'btn-solid',
    color: 'btn-primary',
  },
  render: args => `
    <div class="flex items-center gap-2">
      ${createButton(args)}
      ${createButton({ ...args, disabled: true })}
    </div>
  `,
};

/**
 * To add an icon to a button, add any `<svg>` or `<i>` tag inside the button.
 */
export const WithIcon: Story = {
  args: {
    variant: 'btn-solid',
    color: 'btn-primary',
  },
  render: args => `
    <div class="flex items-center gap-2">
      ${createButton(args)}
      ${createButton({ ...args, withIcon: true })}
    </div>
  `,
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
