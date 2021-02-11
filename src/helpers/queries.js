import { gql } from '@apollo/client';

const GET_LINKS = gql`
  query($username: String!) {
    shoplink(username: $username) {
      links {
        title
        url
      }
    }
  }
`

const GET_FEATURED_DATA = gql`
  query($username: String!) {
    shoplink(username: $username) {
      featuredData {
        ... on Product {
          id
          name
          price
          description
          thumbnailUrl
          buyUrl
        }
      }
		}
  }
`

const GET_USER_INFO = gql`
  query($username: String!) {
    shoplink(username: $username) {
      description
      pic
      username
      id
    }
  }
`

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
            buyUrl
          }
        }
      }
    }
  }
`

export {
	GET_LINKS,
	GET_FEATURED_DATA,
	GET_USER_INFO,
	GET_PAGE_DATA
}