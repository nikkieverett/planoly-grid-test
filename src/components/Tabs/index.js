import './index.scss'

function Tabs({ handleClick, tabContent }) {
  return (
    <ul className="tabs">
      {tabContent.tabs.map(tabName => (
        <li key={tabName} className={`tabs__tab${tabName === tabContent.activeTab ? ' selected' : ''}`} onClick={() => handleClick(tabName)}>
          <span>{tabName}</span>
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
