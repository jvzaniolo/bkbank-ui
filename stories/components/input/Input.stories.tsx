import React from 'react';
import dedent from 'ts-dedent';
import type { Meta, StoryObj } from '@storybook/react';
import mdx from './Input.mdx';

export default {
  title: 'Components/Input',
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

export const Default: StoryObj = {
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

export const Sizes: StoryObj = {
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

export const WithLabel: StoryObj = {
  render: () => (
    <label>
      <span className="mb-1 text-sm">With Label</span>
      <input type="text" className="input" placeholder="Placeholder" />
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label>
            <span class="mb-1 text-sm">With Label</span>
            <input type="text" class="input" placeholder="Placeholder" />
          </label>
        `,
      },
    },
  },
};

export const FloatingLabel: StoryObj = {
  render: () => (
    <label className="relative block">
      <input type="text" className="input" placeholder=" " />
      <span className="input-label">Floating label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="relative block">
            <input type="text" class="input" placeholder=" " />
            <span class="input-label">Floating label</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid: StoryObj = {
  render: () => (
    <label className="relative block">
      <input type="email" className="input input-invalid" placeholder=" " />
      <span className="input-label">E-mail</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="relative block">
            <input type="text" class="input input-invalid" placeholder=" " />
            <span class="input-label">E-mail</span>
          </label>
        `,
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <label className="relative block">
      <input type="email" className="input" placeholder=" " disabled />
      <span className="input-label">E-mail</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="relative block">
            <input type="text" class="input" placeholder=" " disabled />
            <span class="input-label">E-mail</span>
          </label>
        `,
      },
    },
  },
};
