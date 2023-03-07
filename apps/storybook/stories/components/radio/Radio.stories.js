import dedent from 'ts-dedent';

export default {
  title: 'Components/Radio',
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
  render: () => <input type="checkbox" className="tw-radio" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class="radio" />`,
      },
    },
  },
};

export const WithLabel = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-radio" />
      <span className="tw-radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio" />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-radio tw-radio-invalid" />
      <span className="tw-radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio radio-invalid" />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <label className="tw-inline-flex tw-items-center">
      <input type="checkbox" className="tw-radio" disabled />
      <span className="tw-radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio" disabled />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};
