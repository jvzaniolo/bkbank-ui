import dedent from 'ts-dedent';

export default {
  title: 'Components/Textarea',
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
  render: () => <textarea className="tw-textarea" placeholder="Placeholder" />,
  parameters: {
    docs: {
      source: {
        code: dedent`
          <textarea class="textarea" placeholder="Placeholder" />
        `,
      },
    },
  },
};

export const WithLabel = {
  render: () => (
    <label>
      <span className="tw-textarea-label">With Label</span>
      <textarea className="tw-textarea" placeholder="Placeholder" />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="textarea-label">With Label</span>
            <textarea class="textarea" placeholder="Placeholder" />
          </label>
        `,
      },
    },
  },
};

export const Invalid = {
  render: () => (
    <label>
      <span className="tw-textarea-label">Invalid</span>
      <textarea
        className="tw-textarea tw-textarea-invalid"
        placeholder="Invalid..."
      />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="textarea-label">Invalid</span>
            <textarea
              class="textarea textarea-invalid"
              placeholder="Invalid..."
            />
          </label>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <label>
      <span className="tw-textarea-label">Disabled</span>
      <textarea className="tw-textarea" placeholder="Disabled..." disabled />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="textarea-label">Disabled</span>
            <textarea class="textarea" placeholder="Disabled..." disabled />
          </label>
        `,
      },
    },
  },
};

export const FloatingLabel = {
  render: () => (
    <div className="tw-flex tw-gap-5">
      <label className="tw-relative tw-block">
        <textarea className="tw-textarea" />
        <span className="tw-textarea-label" data-label="float">
          Floating label
        </span>
      </label>

      <label className="tw-relative tw-block">
        <textarea className="tw-textarea" placeholder="Some placeholder" />
        <span
          className="tw-textarea-label tw-textarea-label--float"
          data-label="float"
        >
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
            <textarea class="textarea" placeholder="Some placeholder" />
            <span class="textarea-label" data-label="float">Floating label</span>
          </label>
        `,
      },
    },
  },
};
