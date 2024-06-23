import React from 'react';
import { Spinner } from '../components/index';

const UsersList = ({ users, errMesage, isLoading }) => {
  console.log('\n\n users', users, isLoading)
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
      {errMesage
        ? <div>{ errMesage }</div>
        : isLoading
        ? <Spinner />
        : usersList.length
        ? <ul>{ usersList }</ul>
        : <h3>No users available.</h3>
      }
    </>
  );
}

export default React.memo(UsersList)
