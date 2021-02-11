import { useQuery, gql } from '@apollo/client';

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
function Featured({ username }) {
	const { loading, error, data } = useQuery(GET_FEATURED_DATA, {
    variables: {
      username
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data)

  return (
    <div className="featured">
			{data.shoplink.featuredData.map(featuredItem => (
        <div className="featured__item">
          <img src={featuredItem.thumbnailUrl} alt=""/>
        </div>
      ))}
    </div>
  );
}

export default Featured;
