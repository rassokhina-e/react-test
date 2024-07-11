import React from 'react';
import { Spinner } from '../../components/Spinner/index';
import { Users } from './components/Users/index';
import styles from './styles.module.scss';

const UsersPage = ({ users, errMesage, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      {errMesage && <div>{ errMesage }</div>}
      {isLoading && <Spinner />}
      <Users users={users} />
    </div>
  );
}

export default React.memo(UsersPage)
