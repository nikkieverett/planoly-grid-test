import { useQuery, gql } from '@apollo/client';

import Button from '../Inputs/Button'

import './index.scss'

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

  return (
    <ul className="links">
			{data.shoplink.links.map(link => (
        <li key={link.title} className="links__link">
          <Button btnText={link.title} url={link.url} bgColor={btnColor} className="links__link-btn" />
        </li>
			))}
    </ul>
  );
}

export default Links;
