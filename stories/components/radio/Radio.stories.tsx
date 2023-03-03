import React from 'react';
import dedent from 'ts-dedent';
import type { Meta, StoryObj } from '@storybook/react';
import mdx from './Radio.mdx';

export default {
  title: 'Components/Radio',
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
  render: () => <input type="checkbox" className="radio" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class="radio" />`,
      },
    },
  },
};

export const WithLabel: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio" />
      <span className="radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio" />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio radio-invalid" />
      <span className="radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio radio-invalid" />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="radio" disabled />
      <span className="radio-label">With Label</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" class="radio" disabled />
            <span class="radio-label">With Label</span>
          </label>
        `,
      },
    },
  },
};
