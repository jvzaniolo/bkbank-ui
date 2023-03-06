import dedent from 'ts-dedent';

export default {
  title: 'Components/Input',
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
  render: () => (
    <input type="text" className="input" placeholder="Placeholder" />
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <input type="text" class="input" placeholder="Placeholder" />
        `,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-start gap-5">
      <input type="text" className="input" placeholder="Placeholder" />
      <input type="text" className="input input-md" placeholder="Placeholder" />
      <input type="text" className="input input-lg" placeholder="Placeholder" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <input type="text" class="input" placeholder="Placeholder" />
        `,
      },
    },
  },
};

export const WithLabel = {
  render: () => (
    <label>
      <span className="input-label">With Label</span>
      <input type="text" className="input" placeholder="Placeholder" />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="input-label">With Label</span>
            <input type="text" class="input" placeholder="Placeholder" />
          </label>
        `,
      },
    },
  },
};

export const Invalid = {
  render: () => (
    <label>
      <span className="input-label">E-mail</span>
      <input
        type="email"
        className="input input-invalid"
        placeholder="john.doe@gmail.com"
      />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="input-label">E-mail</span>
            <input type="email" class="input input-invalid" placeholder="john.doe@gmail.com" />
          </label>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <label>
      <span className="input-label">E-mail</span>
      <input
        type="email"
        className="input"
        placeholder="john.doe@gmail.com"
        disabled
      />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="input-label">E-mail</span>
            <input type="email" class="input" placeholder="john.doe@gmail.com" disabled />
          </label>
        `,
      },
    },
  },
};

export const FloatingLabel = {
  render: () => (
    <div className="flex gap-5">
      <label className="relative block">
        <input type="text" className="input" />
        <span className="input-label" data-label="float">
          Floating label
        </span>
      </label>

      <label className="relative block">
        <input type="text" className="input" placeholder="Some placeholder" />
        <span className="input-label input-label--float" data-label="float">
          Floating label
        </span>
      </label>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="relative block">
            <input type="text" class="input" placeholder="Some placeholder" />
            <span class="input-label" data-label="float">Floating label</span>
          </label>
        `,
      },
    },
  },
};
