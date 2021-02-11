import { useQuery, gql } from '@apollo/client';

const GET_TAB_DATA = gql`
  query($username: String!) {
    shoplink(username: $username) {
      showPostsTab
      showProductsTab
    }
  }
`

function Tabs({ username }) {
  const { loading, error, data } = useQuery(GET_TAB_DATA, {variables: { username }});

  return (
    <div className="tabs">
			{data.shoplink.showPostsTab && <div>Grid</div>}
			{data.shoplink.showProductsTab && <div>Products</div>}
    </div>
  );
}

export default Tabs;
