import { useQuery, gql } from '@apollo/client';

import './index.scss'

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

function UserInfo({ username }) {
  const { loading, error, data } = useQuery(GET_USER_INFO, { variables: { username } });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div className="user-info">
      <div className="user-info__avatar">
        <img src={data.shoplink.pic} alt="avatar" />
      </div>
      <div className="user-info__meta">
        <h1 className="user-info__meta-username">
          <a href={`/${data.shoplink.username}`}>
            @{data.shoplink.username}
          </a>
        </h1>
        <p className="user-info__meta-description">{data.shoplink.description}</p>
      </div>
    </div>
  );
}

export default UserInfo;
