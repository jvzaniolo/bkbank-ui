import { createInputGroup } from './create-input-group.js';

export default {
  title: 'Components/Input Group',
  parameters: {
    docs: {
      description: {
        component:
          "Use input groups to add icons to an input.<br><strong>Important:</strong> Since this is not a JavaScript library, we can't make the input group automatically receive the `.input-group-invalid` or `.input-group-disabled` whenever the actual input is invalid or disabled.<br>You will need to add the `.input-group-invalid` or `.input-group-disabled` class to the input group wrapper manually.",
      },
    },
  },
  args: { size: 'small', isInvalid: false, isDisabled: false },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: 'small' } },
      description:
        'Set the input-group size.<br>Class: `.input-group-{md|lg}`.',
    },
    isInvalid: {
      table: { defaultValue: { summary: 'false' } },
      control: { type: 'boolean' },
      description:
        'Set the input-group to invalid state.<br>Targets the `.input-group-invalid` class.',
    },
    isDisabled: {
      table: { defaultValue: { summary: 'false' } },
      control: { type: 'boolean' },
      description:
        'Set the input-group to disabled state.<br>Targets the `.input-group-disabled` class.',
    },
  },
};

export const InputGroup = args => createInputGroup(args);