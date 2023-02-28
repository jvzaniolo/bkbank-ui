import type { Meta, StoryObj } from '@storybook/html';
import type { AvatarProps } from './Avatar';
import { createAvatar } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  render: createAvatar,
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
    state: undefined,
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
      table: { defaultValue: { summary: 'unstyled' } },
      options: [undefined, 'avatar-high', 'avatar-primary'],
      control: { type: 'radio', labels: { undefined: 'unstyled' } },
    },
    size: {
      description: 'Available sizes for the avatar component',
      table: { defaultValue: { summary: 'unstyled' } },
      options: [undefined, 'avatar-md', 'avatar-lg'],
      control: { type: 'radio', labels: { undefined: 'unstyled' } },
    },
    state: {
      description: 'Possible states for the avatar component.',
      table: { defaultValue: { summary: 'unstyled' } },
      options: [undefined, 'avatar-active'],
      control: { type: 'radio', labels: { undefined: 'unstyled' } },
    },
    content: {
      description:
        'Possible content for the avatar component.<br>This is just for demonstration purposes.',
      options: ['text', 'icon', 'image'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<AvatarProps>;

type Story = StoryObj<AvatarProps>;

export default meta;

export const Default: Story = {
  args: {
    base: 'avatar',
    content: 'text',
    color: 'avatar-primary',
  },
};
