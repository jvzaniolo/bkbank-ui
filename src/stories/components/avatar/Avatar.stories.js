import dedent from 'ts-dedent';
import { UserIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/Avatar',
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
  render: () => <div className="avatar">RM</div>,
  parameters: {
    docs: {
      source: {
        code: dedent`<div class="avatar">RM</div>`,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-start gap-5">
      <div className="avatar avatar-sm">RM</div>
      <div className="avatar">RM</div>
      <div className="avatar avatar-lg">RM</div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="avatar avatar-sm">RM</div>
          <div class="avatar">RM</div>
          <div class="avatar avatar-lg">RM</div>
        `,
      },
    },
  },
};

export const Colors = {
  render: () => (
    <div className="flex items-start gap-5">
      <div className="avatar">RM</div>
      <div className="avatar avatar-primary">RM</div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="avatar">RM</div>
          <div class="avatar avatar-primary">RM</div>
        `,
      },
    },
  },
};

export const States = {
  render: () => (
    <div className="flex items-start gap-5">
      <div className="avatar">RM</div>
      <div className="avatar avatar-active">RM</div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="avatar">RM</div>
          <div class="avatar avatar-active">RM</div>
        `,
      },
    },
  },
};

export const ContentTypes = {
  render: () => (
    <div className="flex items-start gap-5">
      <div className="avatar">RM</div>
      <div className="avatar">
        <UserIcon />
      </div>
      <div className="avatar">
        <img
          alt="John Doe"
          src="https://randomuser.me/api/portraits/med/men/86.jpg"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="avatar">RM</div>
          <div class="avatar"><svg>...</svg></div>
          <div class="avatar">
            <img alt="John Doe" src="..." />
          </div>
        `,
      },
    },
  },
};
