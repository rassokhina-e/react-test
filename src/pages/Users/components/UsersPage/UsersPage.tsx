import React, { useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { changeUserName } from './userState'

import Checkbox from '@mui/material/Checkbox';

import { useFetchUsers } from '../../../../hooks/useFetchUsers'
import { Spinner } from '../../../../components/Spinner';

import styles from './styles.module.scss';

type User = {
  email: string,
  id: number,
  name: string,
  phone: number,
  username: string,
  website: string
}

const UsersPage = () => {
  const [submissionInProgress, setSubmissionInProgress] = React.useState(false);
  const text = submissionInProgress ? 'Processing': "Go to member's website";

  let defaultCheckedUsers: number[] = [];
  const [checkedUsers, setCheckedUsers] = React.useState(defaultCheckedUsers);

  const { users, isLoading, errMesage } = useFetchUsers();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const user = useSelector((state: RootState) => state.userReducer.user)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeUserName('Zhenya'))
    console.log('user', user)
  }, [])

  const getClasses = (isAdmin: boolean) => cn(styles.websiteBtn, {
    inProgress: submissionInProgress,
    [styles.bgGray]: isAdmin
  });

  const getUserClasses = (userId: number) => cn(styles.row, styles.borderGray, styles.py2, {
    [styles.selected]: checkedUsers.includes(userId)
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, userId: number) => {
    if (event.target.checked) {
      setCheckedUsers([...checkedUsers, userId]);
    } else {
      setCheckedUsers(checkedUsers.filter(id => id !== userId));
    }
  }

  if (!users.length && !isLoading) {
    return <div>No users</div>
  }

  return (
    <div className={styles.wrapper}>
      {errMesage && <div>{ errMesage }</div>}
      {isLoading && <Spinner />}
      <h1>Members</h1>
      {users.map((user: User) =>
        <div key={ user.id } className={getUserClasses(user.id)}>
          <div className={styles.column}>
            <div className={styles.username}>
              <span>{ user.name }</span>
              <span className={styles.ml2}>({ user.username })</span>
            </div>
            <div className={styles.email}>{ user.email }</div>
          </div>
          <div className={styles.row}>
            <Checkbox className={styles.checkbox} checked={checkedUsers.includes(user.id)} onChange={e => handleChange(e, user.id)} {...label} />
            <div className={styles.ml2}>
              <a href={'https://www.' + user.website} target="_blank" rel="noreferrer" className={getClasses(user.id === 2)}>{ text }</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(UsersPage)
