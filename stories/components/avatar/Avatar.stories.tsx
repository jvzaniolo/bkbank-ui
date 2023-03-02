import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import mdx from './Avatar.mdx';

const meta = {
  title: 'Components/Avatar',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Avatar className="avatar" />,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-start gap-5">
      <Avatar className="avatar avatar-sm" />
      <Avatar className="avatar" />
      <Avatar className="avatar avatar-lg" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-start gap-5">
      <Avatar className="avatar" />
      <Avatar className="avatar avatar-primary" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-start gap-5">
      <Avatar className="avatar" />
      <Avatar className="avatar avatar-active" />
    </div>
  ),
};

export const ContentTypes: Story = {
  render: () => (
    <div className="flex items-start gap-5">
      <Avatar className="avatar" content="text" />
      <Avatar className="avatar" content="icon" />
      <Avatar className="avatar" content="image" />
    </div>
  ),
};
