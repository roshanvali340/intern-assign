// components/TabContent.js

import React from 'react';

const TabContent = ({ activeTab }) => {
  return (
    <div className="tab-content">
      {activeTab === 'About Me' && (
        <p>Hello! I'm Dave, your sales rep from Salesforce...</p>
      )}
      {activeTab === 'Experiences' && (
        <p>I've worked in Salesforce for 3 years...</p>
      )}
      {activeTab === 'Recommended' && (
        <p>Here are some recommended tools and resources...</p>
      )}
    </div>
  );
};

export default TabContent;
