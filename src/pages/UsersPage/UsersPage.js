import React from 'react';
import { Users } from './components/Users/index';
import styles from './styles.module.scss';

const UsersPage = () => {
  return (
    <div className={styles.wrapper}>
      <Users />
    </div>
  );
}

export default React.memo(UsersPage)
