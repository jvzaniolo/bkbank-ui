import { createButton } from './button';

export default {
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component:
          'The base class `.btn` and size classes `.btn-{md|lg}` are independent of the color and variant classes. You can use them together to create a button with any color and variant.',
      },
    },
  },
  args: {
    variant: 'solid',
    color: 'primary',
    size: 'small',
    disabled: false,
    text: 'Shop now',
  },
  argTypes: {
    color: {
      description: 'Change the color of the button',
      options: ['primary', 'secondary'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      description: 'Change the variant of the button',
      options: ['solid', 'outline', 'ghost'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      description: 'Change the size of the button',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    disabled: {
      description: 'Toggles the disabled state of the button',
      table: {
        defaultValue: { summary: false },
      },
    },
    text: {
      description: 'Change the text of the button',
    },
  },
};

export const Default = args => createButton(args);

export const Extending = () =>
  `<button type="button" class="btn btn-solid btn-primary rounded-full">Rounded</button>`;

Extending.story = {
  parameters: {
    docs: {
      description: {
        story:
          "You can always extend the `button` with Tailwind utility classes. For example, let's say you want a rounded `button`, use the `rounded-full` class to make the button rounded.",
      },
    },
  },
};

export const OtherColors = () =>
  `<button type="button" class="btn text-red-500 hover:bg-high-light active:bg-high-dark">Cancel</button>

  <button type="button" class="btn bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-300">Purchase</button>
  `;

OtherColors.story = {
  parameters: {
    docs: {
      description: {
        story:
          "As of now, we won't develop many variants of the button. If you need a different color, you can extend the base `.btn` class with other classes to create your own button.",
      },
    },
  },
};
