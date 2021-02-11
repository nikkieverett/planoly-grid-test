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

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { buttonHexColor, showFeatured, showProductsTab } = data.shoplink

  return (
    <Page>
      <Header>
        <UserInfo username={username} />
      </Header>
      <Main>
        <Links username={username} btnColor={buttonHexColor} />
        {showFeatured && <Featured username={username} btnColor={buttonHexColor} />}
        {showProductsTab && <Tabs username={username} changeView={setCurrentView} />}
        <GridContainer gridItems={data.shoplink.posts.data} gridType={currentView} btnColor={buttonHexColor}  />
      </Main>
    </Page>
  );
}

export default App;
