import dedent from 'ts-dedent';
import mdx from './Radio.mdx';

export default {
  title: 'Components/Radio',
  parameters: {
    docs: {
      page: mdx,
      source: {
        format: true,
        type: 'code',
        language: 'html',
      },
    },
  },
};

export const Default = {
  render: () => <input type="checkbox" className="radio" />,
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio" />
      <span className="radio-label">With Label</span>
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio radio-invalid" />
      <span className="radio-label">With Label</span>
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
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio" disabled />
      <span className="radio-label">With Label</span>
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
