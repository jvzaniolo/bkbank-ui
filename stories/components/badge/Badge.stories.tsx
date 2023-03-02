import React from 'react';
import dedent from 'ts-dedent';
import { Meta, StoryObj } from '@storybook/react';
import mdx from './Badge.mdx';

export default {
  title: 'Components/Badge',
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
  render: () => <span className="badge">32</span>,
  parameters: {
    docs: {
      source: {
        code: dedent`<span class="badge">32</span>`,
      },
    },
  },
};

export const Colors: StoryObj = {
  render: () => (
    <div className="flex gap-5">
      <span className="badge">32</span>
      <span className="badge badge-highlight">32</span>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <span class="badge">32</span>
          <span class="badge badge-highlight">32</span>
        `,
      },
    },
  },
};
