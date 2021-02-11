import { useQuery, gql } from '@apollo/client';

import Button from '../Inputs/Button'

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
function Links({ username, btnColor }) {
	const { loading, error, data } = useQuery(GET_LINKS, {
    variables: {
      username
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data)

  return (
    <div className="links">
			{data.shoplink.links.map(link => (
				<Button btnText={link.title} url={link.url} btnColor={btnColor} key={link.title} />
			))}
    </div>
  );
}

export default Links;
