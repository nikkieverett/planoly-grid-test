import { useQuery, gql } from '@apollo/client';

import Button from '../Inputs/Button'

import './index.scss';

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
function Featured({ username , btnColor }) {
	const { loading, error, data } = useQuery(GET_FEATURED_DATA, {
    variables: {
      username
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className="featured">
      <div className="featured__grid">
        {data.shoplink.featuredData.map((featuredItem, index) => {
          if (index <= 1) {
            return (
              <div className="featured__card" key={featuredItem.name}>
                <div className="card">
                  <div className="photo">
                    <img src={featuredItem.thumbnailUrl} alt=""/>
                  </div>
                </div>
                <div className="meta">
                  <h5 className="meta__name">{featuredItem.name}</h5>
                  <p className="meta__price">${featuredItem.price}</p>
                  <div className="meta__button">
                    <Button btnText="Buy" bgColor={btnColor} url={featuredItem.buyUrl} />
                  </div>
                </div>
              </div>
            )
          }
          return ''
        })}
      </div>
    </div>
  );
}

export default Featured;
