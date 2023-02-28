import type { Meta, StoryObj } from '@storybook/html';

const meta = {
  title: 'Components/Breadcrumb',
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumbs are used to show the current page's location within a navigational hierarchy.<br>This component follows the [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).",
      },
    },
  },
  render: () => `
    <nav aria-label="breadcrumb">
      <ol>
        <li><a href="../../">Home</a></li>
        <li><a href="../">Library</a></li>
        <li><a href="" aria-current="page">Data</a></li>
      </ol>
    </nav>
  `,
} satisfies Meta;

export default meta;

export const Default: StoryObj = {};
