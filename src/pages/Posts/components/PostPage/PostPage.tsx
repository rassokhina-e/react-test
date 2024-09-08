import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { increment } from './feetbackCounter'
import type { RootState } from '../../../../store'

import { useFetchPost } from '../../../../hooks/useFetchPosts'
import { useFetchUsers } from '../../../../hooks/useFetchUsers'
import { Spinner } from '../../../../components/Spinner';

import styles from './styles.module.scss';

type Props = {
  postId: string | number;
}

type User = {
  email: string,
  id: number,
  name: string,
  phone: number,
  username: string,
  website: string
}

const PostPage: React.FC<Props>= (props) => {
  const [user, setUser] = React.useState<User>();

  const { postId } = useParams()
  const { post, isLoading } = useFetchPost(postId ? postId : props.postId);
  const { users } = useFetchUsers();

  const dispatch = useDispatch();
  const feetbackCounter = useSelector((state: RootState) => state.feetbackCounter.value)

  React.useEffect(() => {
    const [user] = users.filter((user: any) => {
        if (post !== undefined) {
            return user.id ===  post.userId as number
        } return user
    })
    setUser(user)
  }, [users, post, user]);

  if (isLoading) {
    return <Spinner />
  }

  if (!post && !isLoading) {
    return <div>Post is not available.</div>
  }

  return (
    <div className={styles.wrapper}>
      <h1>Post #{ postId ? postId : props.postId }</h1>
      <div>Feetback count: {feetbackCounter} </div>
      {post !== undefined && <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.posttitle}>{ post.title }</div>
          <div className={styles.postbody}>{ post.body }</div>
        </div>
        <div className={styles.row}>
          <button className={styles.feetbackBtn} onClick={() => dispatch(increment())}>Add feetback</button>
        </div>
      </div>}
    </div>
  );
}

export default React.memo(PostPage)
