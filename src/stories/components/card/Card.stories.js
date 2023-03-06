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
  render: () => <div className="card">Default card</div>,
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
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1 card">Default card</div>
      <div className="flex-1 card card-outline">Outline card</div>
      <div className="flex-1 card card-filled">Filled card</div>
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
    <div className="flex flex-col md:flex-row gap-4">
      <button className="flex-1 card">Default card</button>
      <button className="flex-1 card card-outline">Outline card</button>
      <button className="flex-1 card card-filled">Filled card</button>
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
    <div className="card p-0 overflow-hidden max-w-xs">
      <img
        src="https://picsum.photos/900"
        alt=""
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h5 className="text-2xl">Card title</h5>
        <p className="text-gray-500">
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </p>
        <a href="#" className="block mt-4 underline text-primary-medium">
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
