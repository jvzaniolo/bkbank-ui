import React from 'react';
import dedent from 'ts-dedent';
import { Meta, StoryObj } from '@storybook/react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import mdx from './Button.mdx';

const meta = {
  title: 'Components/Button',
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
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => <button className="btn">Default</button>,
  parameters: {
    docs: {
      source: {
        code: dedent`<button class="btn">Default</button>`,
      },
    },
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn">Small</button>
      <button className="btn btn-md">Medium</button>
      <button className="btn btn-lg">Large</button>
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

export const Colors: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn">Base</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
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

export const Variants: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn btn-primary">Solid</button>
      <button className="btn btn-primary btn-outline">Outline</button>
      <button className="btn btn-primary btn-ghost">Ghost</button>
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

export const Disabled: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn btn-primary" disabled>
        Solid
      </button>
      <button className="btn btn-primary btn-outline" disabled>
        Outline
      </button>
      <button className="btn btn-primary btn-ghost" disabled>
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

export const WithIcon: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn btn-primary">
        <ShoppingBagIcon />
        Solid
      </button>
      <button className="btn btn-primary btn-outline">
        <ShoppingBagIcon />
        Outline
      </button>
      <button className="btn btn-primary btn-ghost">
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

export const IconButton: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <button className="btn btn-icon btn-primary">
        <ShoppingBagIcon />
      </button>
      <button className="btn btn-icon btn-primary btn-outline">
        <ShoppingBagIcon />
      </button>
      <button className="btn btn-icon btn-primary btn-ghost">
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
