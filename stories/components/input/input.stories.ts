import type { Meta, StoryObj } from '@storybook/html';
import clsx from 'clsx';

const meta = {
  title: 'Components/Input',
  parameters: {
    docs: {
      description: {
        component:
          '**Important:** Make sure to follow the example markup structure to ensure proper styling and behavior. More specifically, the `label` must come immediately after the `input` and the `placeholder` content must be set to a single space.<br>Base class: `input`',
      },
    },
  },
  args: { size: 'small', isInvalid: false, isDisabled: false },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'small' },
        type: {
          summary: 'input-{md|lg}',
          detail: '- small: @default\n- medium: input-md\n- large: input-lg',
        },
      },
      description: 'Set input size',
    },
    isInvalid: {
      table: { defaultValue: { summary: 'false' } },
      control: { type: 'boolean' },
      description:
        'Set input to invalid state.<br>Targets the `:invalid` pseudo-class or the `.input-invalid` class.',
    },
    isDisabled: {
      table: { defaultValue: { summary: 'false' } },
      control: { type: 'boolean' },
      description:
        'Set input to disabled state.<br>Targets the `:disabled` pseudo-class or the `.input-disabled` class.',
    },
  },
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: args => `
    <div class="block relative">
      <input id="email" type="email" class="${clsx('input', {
        'input-invalid': args.isInvalid,
        'input-md': args.size === 'medium',
        'input-lg': args.size === 'large',
      })}" placeholder=" "${args.isDisabled ? ' disabled' : ''} />
      <label for="email">E-mail</label>
    </div>

    <!-- OR -->
    <!-- <label for="email" class="block relative">
      <input id="email" type="email" class="${clsx('input', {
        'input-invalid': args.isInvalid,
        'input-md': args.size === 'medium',
        'input-lg': args.size === 'large',
      })}" placeholder=" "${args.isDisabled ? ' disabled' : ''} />
      <span>E-mail</span>
    </label> -->

    <!-- OR -->
    <!-- <label for="email" class="block relative">
      <input id="email" type="email" class="${clsx('input', {
        'input-invalid': args.isInvalid,
        'input-md': args.size === 'medium',
        'input-lg': args.size === 'large',
      })}" placeholder=" "${args.isDisabled ? ' disabled' : ''} />
      <div class="input-label">E-mail</div>
    </label> -->
  `,
};
