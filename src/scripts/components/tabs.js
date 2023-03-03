const tabs = document.querySelectorAll('.tabs');

tabs.forEach((tab) => {
  const tabLinks = tab.querySelectorAll('.tab[role="tab"]');

  tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (e) => {
      if (e.currentTarget.getAttribute('aria-selected') !== 'true') {
        const tabTarget = e.currentTarget.getAttribute('data-target');
        const tabContent = tab.querySelector(tabTarget);
        const activeTab = tab.querySelector('.tab-active');
        const activeTabContent = tab.querySelector(
          activeTab.getAttribute('data-target'),
        );

        activeTab.setAttribute('aria-selected', false);
        activeTab.classList.remove('tab-active');
        activeTabContent.classList.remove('tab-content-active');

        tabContent.classList.add('tab-content-active');
        e.currentTarget.setAttribute('aria-selected', true);
        e.currentTarget.classList.add('tab-active');
      }
    });
  });
});
