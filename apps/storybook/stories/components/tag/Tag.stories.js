import dedent from 'ts-dedent';
import { PlusIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/Tag',
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
  render: () => (
    <div className="tw-tag tw-w-fit">
      <PlusIcon className="tw-w-4 tw-h-4" />
      <span>Tag</span>
      <button className="tw-tag-close">
        <XMarkIcon className="tw-w-4 tw-h-4" />
      </button>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tag">
            <svg class="w-4 h-4">...</svg>
            <span>Tag</span>
            <button class="tag-close">
              <svg class="w-4 h-4">...</svg>
            </button>
          </div>
        `,
      },
    },
  },
};

export const Variants = {
  render: () => (
    <div className="tw-flex tw-gap-5">
      <div className="tw-tag tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
      <div className="tw-tag tw-tag-outline tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tag">...</div>
          <div class="tag tag-outline">...</div>
        `,
      },
    },
  },
};

export const Colors = {
  render: () => (
    <div className="tw-flex tw-gap-5">
      <div className="tw-tag tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
      <div className="tw-tag tw-tag-secondary tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
      <div className="tw-tag tw-tag-outline tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
      <div className="tw-tag tw-tag-outline tw-tag-secondary tw-w-fit">
        <PlusIcon className="tw-w-4 tw-h-4" />
        <span>Tag</span>
        <button className="tw-tag-close">
          <XMarkIcon className="tw-w-4 tw-h-4" />
        </button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tag">...</div>
          <div class="tag tag-outline">...</div>
          <div class="tag tag-secondary">...</div>
          <div class="tag tag-outline tag-secondary">...</div>
        `,
      },
    },
  },
};
