import { useState } from 'react'

import './index.scss'


function Tabs({ username, changeView }) {
  const [activeTab, setActiveTab] = useState('Grid')

  const handleToggle = (selectedTab) => {
    setActiveTab(selectedTab)
    changeView(selectedTab)
  }

  return (
    <ul className="tabs">
      <li className={`tabs__tab${activeTab === 'Grid' ? ' selected' : ''}`} onClick={() => handleToggle('Grid')}>
        <span>Grid</span>
      </li>
      <li className={`tabs__tab${activeTab === 'Products' ? ' selected' : ''}`} onClick={() => handleToggle('Products')}>
        <span>Products</span>
      </li>
    </ul>
  );
}

export default Tabs;
