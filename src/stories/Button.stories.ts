import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '~/lib'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {},
}
