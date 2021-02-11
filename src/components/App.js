import { useQuery, gql } from '@apollo/client';

import UserInfo from './UserInfo'
import Links from './Links'
import Tabs from './Navigation/Tabs'
import Featured from './Featured'
import GridContainer from './Layout/Grid/GridContainer/index'
import Error from './Layout/Page/Error'
import Loading from './Layout/Page/Loading'
import Page from './Layout/Page/index'

const GET_PAGE_DATA = gql`
  query($username: String!) {
    shoplink(username: $username) {
      buttonHexColor
      showFeatured
      showPostsTab
      showProductsTab
      posts {
        data {
          id
          assets {
            contentType
            isVideo
            largeUrl
            mediumUrl
            posterUrl
            smallUrl
            videoUrl
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

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  const { buttonHexColor, showFeatured, posts } = data.shoplink

  return (
    <Page>
      <UserInfo username={username} />
      <Links username={username} btnColor={buttonHexColor} />
      {showFeatured && <Featured username={username} />}
      <Tabs username={username} />
      <GridContainer gridItems={posts.data} gridItemCtaText="Click for Details" />
    </Page>
  );
}

export default App;
