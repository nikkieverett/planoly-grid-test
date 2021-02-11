import { useQuery } from '@apollo/client';

// Queries
import { GET_LINKS } from '../../helpers/queries'

// Components
import Button from '../Buttons/Button'

// Styles
import './index.scss'

function Links({ username, btnColor }) {
  const { loading, error, data } = useQuery(GET_LINKS, { variables: { username } });

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
