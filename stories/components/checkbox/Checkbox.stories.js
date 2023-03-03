import dedent from 'ts-dedent';
import mdx from './Checkbox.mdx';

export default {
  title: 'Components/Checkbox',
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
  render: () => <input type="checkbox" className="checkbox" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class="checkbox" />`,
      },
    },
  },
};

export const WithLabel = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="checkbox" />
      <span className="checkbox-label">Checkbox</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="checkbox" />
            <span class="checkbox-label">Checkbox</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid = {
  render: () => (
    <div className="inline-flex items-center">
      <input
        id="invalid"
        type="checkbox"
        className="checkbox checkbox-invalid"
      />
      <label htmlFor="invalid" className="checkbox-label">
        Invalid
      </label>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="inline-flex items-center">
            <input
              id="invalid"
              type="checkbox"
              class="checkbox checkbox-invalid"
            />
            <label htmlFor="invalid" class="checkbox-label">Invalid</label>
          </div>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <div className="inline-flex items-center">
      <input id="disabled" type="checkbox" className="checkbox" disabled />
      <label htmlFor="disabled" className="checkbox-label">
        Disabled
      </label>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="inline-flex items-center">
            <input id="disabled" type="checkbox" class="checkbox" disabled />
            <label htmlFor="disabled" class="checkbox-label">Disabled</label>
          </div>
        `,
      },
    },
  },
};