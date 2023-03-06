import dedent from 'ts-dedent';

export default {
  title: 'Components/Card',
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
  render: () => <div className="tw-card">Default card</div>,
  parameters: {
    docs: {
      source: {
        code: dedent`<div class="card">RM</div>`,
      },
    },
  },
};

export const Variants = {
  render: () => (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
      <div className="tw-flex-1 tw-card">Default card</div>
      <div className="tw-flex-1 tw-card tw-card-outline">Outline card</div>
      <div className="tw-flex-1 tw-card tw-card-filled">Filled card</div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="card">Default card</div>
          <div class="card card-outline">Outline card</div>
          <div class="card card-filled">Filled card</div>
        `,
      },
    },
  },
};

export const Clickable = {
  render: () => (
    <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
      <button className="tw-flex-1 tw-card">Default card</button>
      <button className="tw-flex-1 tw-card tw-card-outline">
        Outline card
      </button>
      <button className="tw-flex-1 tw-card tw-card-filled">Filled card</button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="card">Default card</button>
          <button class="card card-outline">Outline card</button>
          <button class="card card-filled">Filled card</button>
        `,
      },
    },
  },
};

export const Example = {
  render: () => (
    <div className="tw-card tw-p-0 tw-overflow-hidden tw-max-w-xs">
      <img
        src="https://picsum.photos/900"
        alt=""
        className="tw-h-40 tw-w-full tw-object-cover"
      />
      <div className="tw-p-4">
        <h5 className="tw-text-2xl">Card title</h5>
        <p className="tw-text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <a
          href="#"
          className="tw-block tw-mt-4 tw-underline tw-text-primary-medium"
        >
          Go somewhere
        </a>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="card p-0 overflow-hidden max-w-xs">
            <img
              src="..."
              class="h-40 w-full object-cover"
            />
            <div class="p-4">
              <h5 class="text-2xl">Card title</h5>
              <p class="text-gray-500">
                Some quick example text to build on the card title and make up the
                bulk of the card&apos;s content.
              </p>
              <a href="#" class="block mt-4 underline text-primary-medium">
                Go somewhere
              </a>
            </div>
          </div>
        `,
      },
    },
  },
};
