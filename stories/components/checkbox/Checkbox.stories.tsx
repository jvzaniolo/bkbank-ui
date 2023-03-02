import React from 'react';
import dedent from 'ts-dedent';
import { Meta, StoryObj } from '@storybook/react';
import mdx from './Checkbox.mdx';

export default {
  title: 'Components/Checkbox',
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
  render: () => <input type="checkbox" className="checkbox" />,
  parameters: {
    docs: {
      source: {
        code: dedent`<input type="checkbox" class='checkbox' />`,
      },
    },
  },
};

export const WithLabel: StoryObj = {
  render: () => (
    <label className="inline-flex items-center">
      <input type="checkbox" className="checkbox" />
      <span>Checkbox</span>
    </label>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <label class="inline-flex items-center">
            <input type="checkbox" className="checkbox" />
            <span>Checkbox</span>
          </label>
        `,
      },
    },
  },
};

export const Invalid: StoryObj = {
  render: () => (
    <div className="inline-flex items-center">
      <input
        id="invalid"
        type="checkbox"
        className="checkbox checkbox-invalid"
      />
      <label htmlFor="invalid">Invalid</label>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div className="inline-flex items-center">
            <input
              id="invalid"
              type="checkbox"
              className="checkbox checkbox-invalid"
            />
            <label htmlFor="invalid">Invalid</label>
          </div>
        `,
      },
    },
  },
};

export const Disabled: StoryObj = {
  render: () => (
    <div className="inline-flex items-center">
      <input id="disabled" type="checkbox" className="checkbox" disabled />
      <label htmlFor="disabled">Disabled</label>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="inline-flex items-center">
            <input id="disabled" type="checkbox" class="checkbox" disabled />
            <label htmlFor="disabled">Disabled</label>
          </div>
        `,
      },
    },
  },
};
