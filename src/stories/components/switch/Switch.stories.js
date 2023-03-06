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
  render: () => <input type="checkbox" className="switch" />,
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
    <div className="flex items-start gap-5">
      <input type="checkbox" className="switch" />
      <input type="checkbox" className="switch switch-md" />
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch" />
      <span className="switch-label">With Label</span>
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch switch-invalid" />
      <span className="switch-label">With Label</span>
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch" disabled />
      <span className="switch-label">With Label</span>
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
