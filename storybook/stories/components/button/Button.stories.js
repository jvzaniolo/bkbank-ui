import dedent from 'ts-dedent';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/Button',
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
  render: () => <button className="tw-btn">Default</button>,
  parameters: {
    docs: {
      source: {
        code: dedent`<button class="btn">Default</button>`,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn">Small</button>
      <button className="tw-btn tw-btn-md">Medium</button>
      <button className="tw-btn tw-btn-lg">Large</button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn">Small</button>
          <button class="btn btn-md">Medium</button>
          <button class="btn btn-lg">Large</button>
        `,
      },
    },
  },
};

export const Colors = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn">Base</button>
      <button className="tw-btn tw-btn-primary">Primary</button>
      <button className="tw-btn tw-btn-secondary">Secondary</button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn">Base</button>
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
        `,
      },
    },
  },
};

export const Variants = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn tw-btn-primary">Solid</button>
      <button className="tw-btn tw-btn-primary tw-btn-outline">Outline</button>
      <button className="tw-btn tw-btn-primary tw-btn-ghost">Ghost</button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn btn-primary">Solid</button>
          <button class="btn btn-primary btn-outline">Outline</button>
          <button class="btn btn-primary btn-ghost">Ghost</button>
        `,
      },
    },
  },
};

export const Disabled = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn tw-btn-primary" disabled>
        Solid
      </button>
      <button className="tw-btn tw-btn-primary tw-btn-outline" disabled>
        Outline
      </button>
      <button className="tw-btn tw-btn-primary tw-btn-ghost" disabled>
        Ghost
      </button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn btn-primary" disabled>
            Solid
          </button>
          <button class="btn btn-primary btn-outline" disabled>
            Outline
          </button>
          <button class="btn btn-primary btn-ghost" disabled>
            Ghost
          </button>
        `,
      },
    },
  },
};

export const WithIcon = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn tw-btn-primary">
        <ShoppingBagIcon />
        Solid
      </button>
      <button className="tw-btn tw-btn-primary tw-btn-outline">
        <ShoppingBagIcon />
        Outline
      </button>
      <button className="tw-btn tw-btn-primary tw-btn-ghost">
        <ShoppingBagIcon />
        Ghost
      </button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn btn-primary">
            <svg>...</svg>
            Solid
          </button>
          <button class="btn btn-primary btn-outline">
            <svg>...</svg>
            Outline
          </button>
          <button class="btn btn-primary btn-ghost">
            <svg>...</svg>
            Ghost
          </button>
        `,
      },
    },
  },
};

export const IconButton = {
  render: () => (
    <div className="tw-flex tw-items-start tw-gap-5">
      <button className="tw-btn tw-btn-icon tw-btn-primary">
        <ShoppingBagIcon />
      </button>
      <button className="tw-btn tw-btn-icon tw-btn-primary tw-btn-outline">
        <ShoppingBagIcon />
      </button>
      <button className="tw-btn tw-btn-icon tw-btn-primary tw-btn-ghost">
        <ShoppingBagIcon />
      </button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <button class="btn btn-icon btn-primary">
            <svg>...</svg>
          </button>
          <button class="btn btn-icon btn-primary btn-outline">
            <svg>...</svg>
          </button>
          <button class="btn btn-icon btn-primary btn-ghost">
            <svg>...</svg>
          </button>
        `,
      },
    },
  },
};
