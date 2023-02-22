export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      description: {
        component:
          'The `badge` component is used to represent a notification. Badges should **always have a text content**.<br>Base class: `.badge`. Colors: `.badge-{highlight}`.',
      },
    },
  },
  args: {
    content: '32',
  },
  argTypes: {
    content: {
      description: 'Change the content of the badge in the example.',
      control: {
        type: 'text',
      },
    },
  },
};

export const Default = ({ content }) =>
  `<div class="badge badge-highlight">${content}</div>`;
