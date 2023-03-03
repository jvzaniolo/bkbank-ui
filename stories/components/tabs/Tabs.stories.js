import mdx from './Tabs.mdx';

export default {
  title: 'Components/Tabs',
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const Default = {
  render: () => (
    <div className="tabs">
      <ul id="tabs-example-1" className="tab-list" role="tablist">
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
        <li role="presentation">
          <button
            id="about-tab"
            type="button"
            role="tab"
            className="tab"
            data-target="#about"
            aria-controls="about"
            aria-selected="false"
          >
            About
          </button>
        </li>
      </ul>

      <div>
        <div
          id="home"
          className="tab-content tab-content-active"
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
        <div
          id="about"
          className="tab-content"
          role="tabpanel"
          aria-labelledby="about-tab"
          tabIndex={0}
        >
          About tab
        </div>
      </div>
    </div>
  ),
};
