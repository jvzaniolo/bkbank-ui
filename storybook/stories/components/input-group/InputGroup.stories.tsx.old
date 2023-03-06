import React from 'react';
import dedent from 'ts-dedent';
import type { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import mdx from './InputGroup.mdx';

export default {
  title: 'Components/InputGroup',
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
    <>
      <div className="input-group">
        <div className="input-group-icon">
          <MagnifyingGlassIcon />
        </div>
        <label className="relative block">
          <input type="text" className="input" placeholder=" " />
          <span className="input-label">Placeholder</span>
        </label>
        <div className="input-group-icon">
          <XMarkIcon />
        </div>
      </div>
      <span className="input-group-alt">Helper text</span>
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="input-group">
            <div class="input-group-icon">
              <svg>...</svg>
            </div>
            <label class="relative block">
              <input type="text" class="input" placeholder=" " />
              <span class="input-label">Placeholder</span>
            </label>
            <div class="input-group-icon">
              <svg>...</svg>
            </div>
          </div>
          <span class="input-group-alt">Helper text</span>
        `,
      },
    },
  },
};

export const Invalid: StoryObj = {
  render: () => (
    <>
      <div className="input-group input-group-invalid">
        <div className="input-group-icon">
          <MagnifyingGlassIcon />
        </div>
        <label className="relative block">
          <input type="text" className="input" placeholder=" " />
          <span className="input-label">Placeholder</span>
        </label>
        <div className="input-group-icon">
          <XMarkIcon />
        </div>
      </div>
      <span className="input-group-alt">Helper text</span>
    </>
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
