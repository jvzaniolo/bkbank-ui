import dedent from 'ts-dedent';

export default {
  title: 'Components/Badge',
  parameters: {
    docs: {
      source: {
        format: true,
        type: 'code',
        language: 'html',
      },
    },
  },
};

export const Default = {
  render: () => <span className="tw-badge">32</span>,
  parameters: {
    docs: {
      source: {
        code: dedent`<span class="badge">32</span>`,
      },
    },
  },
};

export const Colors = {
  render: () => (
    <div className="tw-flex tw-gap-5">
      <span className="tw-badge">32</span>
      <span className="tw-badge tw-badge-highlight">32</span>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <span class="badge">32</span>
          <span class="badge badge-highlight">32</span>
        `,
      },
    },
  },
};