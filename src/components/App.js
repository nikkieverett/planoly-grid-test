import { useState } from 'react'
import { useQuery, gql } from '@apollo/client';

import UserInfo from './UserInfo'
import Header from './Layout/Header'
import Main from './Layout/Main'
import Links from './Links'
import Tabs from './Tabs'
import Featured from './Featured'
import GridContainer from './Grid/GridContainer'
import Loading from './Layout/Page/Loading'
import Page from './Layout/Page/index'

import '../styles/index.scss'

const GET_PAGE_DATA = gql`
  query($username: String!) {
    shoplink(username: $username) {
      id
      buttonHexColor
      showFeatured
      showPostsTab
      showProductsTab
      posts {
        data {
          id
          assets {
            mediumUrl
          }
          caption
          products {
            thumbnailUrl
            name
            id
            price
          }
        }
      }
    }
  }
`

function App() {
  const username = 'megyalook'
  const { loading, error, data } = useQuery(GET_PAGE_DATA, {variables: { username }});
  const [currentView, setCurrentView] = useState('Grid')

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { buttonHexColor, showFeatured, showProductsTab } = data.shoplink

  // Could use 'currentView' to determine which data set to pass to grid container

  return (
    <Page>
      <Header>
        <UserInfo username={username} />
      </Header>
      <Main>
        <Links username={username} btnColor={buttonHexColor} />
        {showFeatured && <Featured username={username} btnColor={buttonHexColor} />}
        {showProductsTab && <Tabs username={username} changeView={setCurrentView} />}
        <GridContainer gridItems={data.shoplink.posts.data}  />
      </Main>
    </Page>
  );
}

export default App;
