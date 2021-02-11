import { useQuery, gql } from '@apollo/client';

const GET_USER_INFO = gql`
  query($username: String!) {
    shoplink(username: $username) {
      description
      pic
      username
		}
  }
`
function UserInfo({ username }) {
	const { loading, error, data } = useQuery(GET_USER_INFO, {
    variables: {
      username
    },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;
  console.log(data)

  return (
    <div className="user-info">
			<div className="user-info__avatar">
        <img src={data.shoplink.pic} alt="avatar" />
      </div>
      <div className="user-info__username">@{data.shoplink.username}</div>
      <div className="user-info__description">{data.shoplink.description}</div>
    </div>
  );
}

export default UserInfo;
