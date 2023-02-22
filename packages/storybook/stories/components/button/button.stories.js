import { createButton } from './create-button';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'The `button` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.<br>Base class: `.btn`. Sizes: `.btn-{md|lg}`. Variants: `.btn-{solid|outline|ghost}`. Colors: `.btn-{primary|secondary}`.',
      },
    },
  },
  args: {
    size: 'small',
    variant: 'solid',
    color: 'primary',
    disabled: false,
    withIcon: false,
  },
  argTypes: {
    size: {
      description:
        'Change the size of the button.<br><br>Class: `.btn-{md|lg}`.',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    variant: {
      description:
        'Change the variant of the button.<br><br>Class: `.btn-{solid|outline|ghost}`.',
      options: ['solid', 'outline', 'ghost'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    color: {
      description:
        'Change the color of the button.<br><br>Class: `.btn-{primary|secondary}`.',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      description:
        'Toggles the disabled state of the button.<br><br>Use the `disabled` attribute.',
      table: {
        defaultValue: { summary: false },
      },
    },
    withIcon: {
      description:
        'Add any `svg` or `i` tag to add an Icon to the button.<br><br>Target the `svg` or `i` element inside the button to apply styles.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
};

export const Default = args => createButton(args);

/**
 * Use the `.btn-icon` class to create an icon button. All other variants still apply.
 */
export const IconButton = () => `
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
`;
