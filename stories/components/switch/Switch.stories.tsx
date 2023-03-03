import React from 'react';
import dedent from 'ts-dedent';
import type { Meta, StoryObj } from '@storybook/react';
import mdx from './Switch.mdx';

export default {
  title: 'Components/Switch',
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
  render: () => <input type="checkbox" className="switch" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class="switch" />`,
      },
    },
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="flex items-start gap-5">
      <input type="checkbox" className="switch" />
      <input type="checkbox" className="switch switch-md" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <input type="checkbox" class="switch" />
          <input type="checkbox" class="switch switch-md" />
        `,
      },
    },
  },
};

export const WithLabel: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch" />
      <span className="switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch" />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch switch-invalid" />
      <span className="switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch switch-invalid" />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="switch" disabled />
      <span className="switch-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="switch" disabled />
            <span class="switch-label">With Label</span>
          </label>
        `,
      },
    },
  },
};
