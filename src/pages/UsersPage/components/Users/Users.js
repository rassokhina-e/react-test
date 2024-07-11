import React from 'react';
import styles from './styles.module.scss';
import cn from 'classnames';

const Users = (props) => {
  // TODO: how to use classnames in array
  const [submissionInProgress, setSubmissionInProgress] = React.useState(false);
  const text = submissionInProgress ? 'Processing': "Go to member's website";
  const className = cn({
    [styles.websiteBtn]: true,
    inProgress: submissionInProgress
  });
  if (!props.users.length) {
    return <div>No users</div>
  }
  return (
    <div className={styles.wrapper}>
      <h1>Members</h1>
      {props.users.map(user =>
        <div key={ user.id } className={styles.row}>
          <div className={styles.column}>
            <div className={styles.username}>
              <span>{ user.name }</span>
              <span className={styles.ml2}>({ user.username })</span>
            </div>
            <div className={styles.email}>{ user.email }</div>
          </div>
          <div>
            <a href={'https://www.' + user.website} target="_blank" rel="noreferrer" className={className}>{ text }</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(Users)
