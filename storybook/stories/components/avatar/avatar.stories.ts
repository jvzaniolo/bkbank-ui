import type { Meta, StoryObj } from '@storybook/html';
import type { AvatarArgs } from './create-avatar';
import { createAvatar } from './create-avatar';

const meta = {
  title: 'Components/Avatar',
  render: args => createAvatar(args),
  parameters: {
    docs: {
      description: {
        component:
          'Avatars are used to show a thumbnail representation of an individual or business in the interface.',
      },
    },
  },
  args: {
    base: 'avatar',
    size: undefined,
    color: undefined,
    content: 'text',
  },
  argTypes: {
    base: {
      description: 'Base class for the avatar component.',
      table: { defaultValue: { summary: 'avatar' } },
      control: { type: '' },
    },
    color: {
      description: 'Available colors for the avatar component.',
      table: { defaultValue: { summary: 'Unstyled' } },
      options: [undefined, 'avatar-high', 'avatar-primary'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Unstyled',
          'avatar-high': 'High',
          'avatar-primary': 'Primary',
        },
      },
    },
    size: {
      description: 'Available sizes for the avatar component.',
      table: { defaultValue: { summary: 'Small' } },
      options: [undefined, 'avatar-md', 'avatar-lg'],
      control: {
        type: 'radio',
        labels: {
          undefined: 'Small',
          'avatar-md': 'Medium',
          'avatar-lg': 'Large',
        },
      },
    },
    content: {
      description:
        'Possible content for the avatar component.<br>This is just for demonstration purposes.',
      options: ['text', 'icon', 'image'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<AvatarArgs>;

type Story = StoryObj<AvatarArgs>;

export default meta;

export const Default: Story = {
  args: {
    base: 'avatar',
    content: 'text',
    color: 'avatar-primary',
  },
};

/**
 * Available sizes for the avatar component.
 *
 * Small: `@default`
 * Medium: `avatar-md`
 * Large: `avatar-lg`
 */
export const Sizes: Story = {
  args: {
    base: 'avatar',
    color: 'avatar-primary',
    content: 'text',
  },
  render: args => `
    <div class="flex gap-4">
      ${createAvatar(args)}
      ${createAvatar({ ...args, size: 'avatar-md' })}
      ${createAvatar({ ...args, size: 'avatar-lg' })}
    </div>
  `,
};

/**
 * Available colors for the avatar component.
 *
 * Unstyled: `@default`
 * High: `avatar-high`
 * Primary: `avatar-primary`
 */
export const Colors: Story = {
  args: {
    base: 'avatar',
    content: 'text',
  },
  render: args => `
    <div class="flex gap-4">
      ${createAvatar(args)}
      ${createAvatar({ ...args, color: 'avatar-high' })}
      ${createAvatar({ ...args, color: 'avatar-primary' })}
    </div>
  `,
};

/**
 * Possible content for the avatar component. This is just for demonstration purposes. You don't need to pass any additional class.
 *
 * Text: `string`
 * Icon: `<svg>` or `<i>`
 * Image: `<img>`
 */
export const Content: Story = {
  args: {
    base: 'avatar',
    color: 'avatar-primary',
  },
  render: args => `
    <div class="flex gap-4">
      ${createAvatar({ ...args, content: 'text' })}
      ${createAvatar({ ...args, content: 'icon' })}
      ${createAvatar({ ...args, content: 'image' })}
    </div>
  `,
};
/**
 * Possible states for the avatar component.
 *
 * Unstyled: `@default`
 * Active: `avatar-active`
 */
export const State: Story = {
  args: {
    base: 'avatar',
    content: 'text',
    size: 'avatar-md',
    color: 'avatar-primary',
  },
  render: args => `
    <div class="flex gap-4">
      ${createAvatar(args)}
      ${createAvatar({ ...args, state: 'avatar-active' })}
    </div>
  `,
};

/**
 * You can override the default styles by adding your own classes with Tailwind CSS.
 */
export const Custom: Story = {
  render: () => `
    <div class="flex gap-4">
      <div class="avatar avatar-md avatar-primary rounded-none">BK</div>
      <div class="avatar avatar-md bg-error-pure text-white">BK</div>
    </div>
  `,
};
