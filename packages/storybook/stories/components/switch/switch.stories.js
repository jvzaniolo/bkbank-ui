import { createSwitch } from './create-switch';

export default {
  title: 'Components/Switch',
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
};

export const Default = args => createSwitch(args);
