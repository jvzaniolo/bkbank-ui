const tabs = document.querySelectorAll('.tabs');

tabs.forEach((container) => {
  const tabLinks = container.querySelectorAll('.tab');

  const initialTab = container.querySelector('.tab-active');

  if (initialTab) {
    const initialTabTarget = initialTab.getAttribute('data-target');

    if (!initialTabTarget) {
      throw new Error(
        "The initial tab must have a data-target attribute that points to the ID of the tab content. I.e. <button class='tab tab-active' data-target='#tab-content-1'>Tab 1</button>",
      );
    }

    const initialTabContent = container.querySelector(initialTabTarget);

    if (!initialTabContent) {
      throw new Error(
        `The tab content with the ID ${initialTabTarget} does not exist.`,
      );
    }

    initialTabContent.classList.add('!block');
  }

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (e) => {
      const nextTab = e.currentTarget;
      const nextTabTarget = nextTab.getAttribute('data-target');

      if (!nextTabTarget) {
        throw new Error(
          "The tab must have a data-target attribute that points to the ID of the tab content. I.e. <button class='tab' data-target='#tab-content-1'>Tab 1</button>",
        );
      }

      const nextTabContent = container.querySelector(nextTabTarget);

      if (!nextTabContent) {
        throw new Error(
          `The tab content with the ID ${nextTabTarget} does not exist.`,
        );
      }

      // Only switch tabs if the clicked tab is not the current tab
      if (nextTab.getAttribute('aria-selected') !== 'true') {
        const currentTab = container.querySelector('.tab-active');

        if (currentTab) {
          const currentTabTarget = currentTab.getAttribute('data-target');
          const currentTabContent = container.querySelector(currentTabTarget);

          if (!currentTabContent) {
            throw new Error(
              `The tab content with the ID ${currentTabTarget} does not exist.`,
            );
          }

          currentTab.classList.remove('tab-active');
          currentTab.setAttribute('aria-selected', false);
          currentTabContent.classList.remove('!block');
        }

        nextTab.classList.add('tab-active');
        nextTab.setAttribute('aria-selected', true);
        nextTabContent.classList.add('!block');
      }
    });
  });
});
