import React from 'react';
import { Spinner } from '../../components/Spinner/index';

const UsersPage = ({ users, errMesage, isLoading }) => {
  const usersList = users ? users.map(user =>
    <li key={ user.id }>
      <div>Name: { user.name }</div>
      <div>Username: { user.username }</div>
      <div>Email: { user.email }</div>
      <div>Website: { user.website }</div>
    </li>
  ) : []
  return (
    <>
        {errMesage && <div>{ errMesage }</div>}
        {isLoading && <Spinner />}
        {usersList.length > 0
            ? <ul>{ usersList }</ul>
            : <h3>No users available.</h3>
        }
    </>
  );
}

export default React.memo(UsersPage)
