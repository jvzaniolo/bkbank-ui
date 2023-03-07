import dedent from 'ts-dedent';

export default {
  title: 'FAQ/Extending',
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

export const CircularIconButton = {
  render: () => (
    <button
      type="button"
      className="tw-btn tw-btn-icon tw-btn-solid tw-btn-primary tw-rounded-full"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button type="button" class="btn btn-icon btn-solid btn-primary rounded-full">
            <svg>...</svg>
          </button>
        `,
      },
    },
  },
};

export const SquareButton = {
  render: () => (
    <button className="tw-btn tw-btn-solid tw-btn-primary tw-rounded-none">
      Square
    </button>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn btn-solid btn-primary rounded-none">
            Square
          </button>
        `,
      },
    },
  },
};

export const IndigoAvatar = {
  render: () => (
    <div className="tw-avatar tw-avatar-md tw-bg-indigo-500 tw-text-white">
      JV
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="avatar avatar-md bg-indigo-500 text-white">JV</div>
        `,
      },
    },
  },
};

export const CancelGhostButton = {
  render: () => (
    <button
      type="button"
      className="tw-btn hover:tw-bg-high-light active:tw-bg-high-dark tw-text-red-500 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-red-200"
    >
      Cancel
    </button>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button type="button" class="btn hover:bg-high-light active:bg-high-dark text-red-500 focus:outline-none focus:ring-2 focus:ring-red-200">
            Cancel
          </button>
        `,
      },
    },
  },
};

export const PurchaseSolidButton = {
  render: () => (
    <button
      type="button"
      className="tw-btn tw-bg-emerald-500 tw-text-white hover:tw-bg-emerald-600 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-emerald-300 active:tw-bg-emerald-700"
    >
      Purchase
    </button>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button type="button" class="btn bg-emerald-500 text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 active:bg-emerald-700">
            Purchase
          </button>
        `,
      },
    },
  },
};
