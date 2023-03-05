import dedent from 'ts-dedent';
import { PlusIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/Tabs',
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
    <div className="tabs">
      <div className="tab-list">
        <button className="tab tab-active" data-target="#home">
          <PlusIcon className="h-4 w-4" />
          Home
        </button>
        <button className="tab" data-target="#settings">
          Settings
        </button>
      </div>

      <div id="home" className="tab-content !block">
        Home tab
      </div>
      <div id="settings" className="tab-content">
        Settings tab
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tabs">
            <div class="tab-list">
              <button class="tab tab-active" data-target="#home">
                <svg class="w-4 h-4">...</svg>
                Home
              </button>
              <button class="tab" data-target="#settings">
                Settings
              </button>
            </div>

            <div id="home" class="tab-content">
              Home tab
            </div>
            <div id="settings" class="tab-content">
              Settings tab
            </div>
          </div>
        `,
      },
    },
  },
};

export const Accessibility = {
  render: () => (
    <div className="tabs">
      <ul className="tab-list" role="tablist">
        <li role="presentation">
          <button
            id="home-tab"
            type="button"
            role="tab"
            className="tab tab-active"
            data-target="#home"
            aria-controls="home"
            aria-selected="true"
          >
            <PlusIcon className="h-4 w-4" />
            Home
          </button>
        </li>
        <li role="presentation">
          <button
            id="settings-tab"
            type="button"
            role="tab"
            className="tab"
            data-target="#settings"
            aria-controls="settings"
            aria-selected="false"
          >
            Settings
          </button>
        </li>
      </ul>

      <div>
        <div
          id="home"
          className="tab-content !block"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          Home tab
        </div>
        <div
          id="settings"
          className="tab-content"
          role="tabpanel"
          aria-labelledby="settings-tab"
          tabIndex={0}
        >
          Settings tab
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tabs">
            <ul class="tab-list" role="tablist">
              <li role="presentation">
                <button
                  id="home-tab"
                  type="button"
                  role="tab"
                  class="tab tab-active"
                  data-target="#home"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <svg class="w-4 h-4">...</svg>
                  Home
                </button>
              </li>
              <li role="presentation">
                <button
                  id="settings-tab"
                  type="button"
                  role="tab"
                  class="tab"
                  data-target="#settings"
                  aria-controls="settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </li>
            </ul>

            <div>
              <div
                id="home"
                class="tab-content tab-content-active"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabindex="0"
              >
                Home tab
              </div>
              <div
                id="settings"
                class="tab-content"
                role="tabpanel"
                aria-labelledby="settings-tab"
                tabindex="0"
              >
                Settings tab
              </div>
            </div>
          </div>
        `,
      },
    },
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-start gap-5">
      <div className="tabs">
        <div className="tab-list">
          <button className="tab tab-active flex" data-target="#home">
            <PlusIcon className="h-4 w-4" />
            Home
          </button>
          <button className="tab" data-target="#settings">
            Settings
          </button>
        </div>

        <div id="home" className="tab-content !block">
          Home tab
        </div>
        <div id="settings" className="tab-content">
          Settings tab
        </div>
      </div>
      <div className="tabs tabs-md">
        <div className="tab-list">
          <button className="tab tab-active flex" data-target="#home">
            <PlusIcon className="h-4 w-4" />
            Home
          </button>
          <button className="tab" data-target="#settings">
            Settings
          </button>
        </div>

        <div id="home" className="tab-content !block">
          Home tab
        </div>
        <div id="settings" className="tab-content">
          Settings tab
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: dedent`
          <div class="tabs">
            ...
          </div>
          <div class="tabs tabs-md">
            ...
          </div>
        `,
      },
    },
  },
};
