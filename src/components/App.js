import { useState } from 'react'
import { useQuery } from '@apollo/client';

// Queries
import { GET_PAGE_DATA } from '../helpers/queries'

// Components
import UserInfo from './UserInfo'
import Header from './Layout/Header'
import Main from './Layout/Main'
import Links from './Links'
import Tabs from './Tabs'
import Featured from './Featured'
import GridContainer from './Grid/GridContainer'
import Loading from './Layout/Page/Loading'
import Page from './Layout/Page/index'

// Styles
import '../styles/index.scss'

function App() {
  const username = 'megyalook'
  const { loading, error, data } = useQuery(GET_PAGE_DATA, {variables: { username }});
  const [currentView, setCurrentView] = useState('Grid')
  const [tabContent, setTabContent] = useState({
    tabs: ['Grid', 'Products'],
    activeTab: 'Grid'
  })

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { buttonHexColor, showFeatured, showProductsTab, posts } = data.shoplink

  const handleTabClick = (tabName) => {
    setTabContent((prevState => ({
      ...prevState,
      activeTab: tabName
    })))
    setCurrentView(tabName)
  }

  return (
    <Page>
      <Header>
        <UserInfo username={username} />
      </Header>
      <Main>
        <Links username={username} btnColor={buttonHexColor} />
        {showFeatured && <Featured username={username} btnColor={buttonHexColor} />}
        {showProductsTab && <Tabs username={username} handleClick={handleTabClick} tabContent={tabContent} />}
        <GridContainer gridItems={posts.data} gridType={currentView} btnColor={buttonHexColor}  />
      </Main>
    </Page>
  );
}

export default App;
