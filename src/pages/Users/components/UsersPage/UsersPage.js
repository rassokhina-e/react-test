import React from 'react';
import cn from 'classnames';

import { useFetchUsers } from '../../../../hooks/useFetchUsers'
import { Spinner } from '../../../../components/Spinner';

import styles from './styles.module.scss';

const Users = () => {
  const [submissionInProgress, setSubmissionInProgress] = React.useState(false);
  const text = submissionInProgress ? 'Processing': "Go to member's website";

  const [checkedUsers, setCheckedUsers] = React.useState([]);

  const { users, isLoading, errMesage } = useFetchUsers();

  const getClasses = (isAdmin) => cn(styles.websiteBtn, {
    inProgress: submissionInProgress,
    [styles.bgGray]: isAdmin
  });

  const getUserClasses = (userId) => cn(styles.row, styles.borderGray, styles.py2, {
    [styles.selected]: checkedUsers.includes(userId)
  });

  const handleChange = (event, userId) => {
    if (event.target.checked) {
      setCheckedUsers([...checkedUsers, userId]);
    } else {
      setCheckedUsers(checkedUsers.filter(id => id !== userId));
    }
  }

  if (!users.length) {
    return <div>No users</div>
  }

  return (
    <div className={styles.wrapper}>
      {errMesage && <div>{ errMesage }</div>}
      {isLoading && <Spinner />}
      <h1>Members</h1>
      {users.map(user =>
        <div key={ user.id } className={getUserClasses(user.id)}>
          <div className={styles.column}>
            <div className={styles.username}>
              <span>{ user.name }</span>
              <span className={styles.ml2}>({ user.username })</span>
            </div>
            <div className={styles.email}>{ user.email }</div>
          </div>
          <div className={styles.row}>
            <input type="checkbox" checked={checkedUsers.includes(user.id)} onChange={e => handleChange(e, user.id)}></input>
            <div className={styles.ml2}>
              <a href={'https://www.' + user.website} target="_blank" rel="noreferrer" className={getClasses(user.id === 2)}>{ text }</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(Users)
