import React from 'react';

export default {
  title: 'Components/Tabs',
};

export const Default = () => (
  <>
    <div className="tabs">
      <button className="tab">London</button>
      <button className="tab">Paris</button>
      <button className="tab">Tokyo</button>
    </div>

    <div id="London" className="tab-content">
      <h3>London</h3>
      <p>London is the capital city of England.</p>
    </div>

    <div id="Paris" className="tab-content">
      <h3>Paris</h3>
      <p>Paris is the capital of France.</p>
    </div>

    <div id="Tokyo" className="tab-content">
      <h3>Tokyo</h3>
      <p>Tokyo is the capital of Japan.</p>
    </div>
  </>
);
