import React from 'react';

const UsersList = ({ usersArr }) => {
  const listUsers = usersArr.map(user =>
    <li key={ user.id }>
      <div>Name: { user.name }</div>
      <div>Username: { user.username }</div>
      <div>Email: { user.email }</div>
      <div>Website: { user.website }</div>
    </li>
  );
  return (
    <ul>{ listUsers }</ul>
  );
}

export default React.memo(UsersList)
