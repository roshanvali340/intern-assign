import React, { useState } from 'react';
import './App.css';
import TabContent from './components/TabContent';
import Gallery from './components/Gallery';

const App = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      {/* Left Empty Area */}
      <div className="empty-left"></div>

      {/* Right Widgets */}
      <div className="right-widgets">
        {/* First Widget (Tabs: About Me, Experiences, Recommended) */}
        <div className="first-widget">
          <div className="tabs">
            <button
              className={activeTab === 'About Me' ? 'active' : ''}
              onClick={() => handleTabClick('About Me')}
            >
              About Me
            </button>
            <button
              className={activeTab === 'Experiences' ? 'active' : ''}
              onClick={() => handleTabClick('Experiences')}
            >
              Experiences
            </button>
            <button
              className={activeTab === 'Recommended' ? 'active' : ''}
              onClick={() => handleTabClick('Recommended')}
            >
              Recommended
            </button>
          </div>
          <TabContent activeTab={activeTab} />
        </div>

        {/* Second Widget (Gallery) */}
        <div className="second-widget">
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default App;
