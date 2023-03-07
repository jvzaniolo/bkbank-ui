import dedent from 'ts-dedent';

export default {
  title: 'Components/Switch',
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
  render: () => <input type="checkbox" className="tw-switch" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class="switch" />`,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <input type="checkbox" className="tw-switch" />
      <input type="checkbox" className="tw-switch tw-switch-md" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <input type="checkbox" class="switch" />
          <input type="checkbox" class="switch switch-md" />
        `,
      },
    },
  },
};

export const WithLabel = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-switch" />
      <span className="tw-switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch" />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-switch tw-switch-invalid" />
      <span className="tw-switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch switch-invalid" />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-switch" disabled />
      <span className="tw-switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch" disabled />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};
