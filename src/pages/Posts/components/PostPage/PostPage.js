import React from 'react';
import { useParams } from 'react-router-dom';

import { useFetchPost } from '../../../../hooks/useFetchPosts'
import { Spinner } from '../../../../components/Spinner';

import styles from './styles.module.scss';

const PostPage = (props) => {
  const { postId } = useParams()
  const { post, isLoading, errMesage } = useFetchPost(postId ? postId : props.postId);

  if (isLoading) {
    return <Spinner />
  }

  if (!post && !isLoading) {
    return <div>Post is not available.</div>
  }

  return (
    <div className={styles.wrapper}>
      {errMesage && <div>{ errMesage }</div>}
      <h1>Post #{ postId ? postId : props.postId }</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.posttitle}>{ post.title }</div>
          <div className={styles.postbody}>{ post.body }</div>
        </div>
        <div className={styles.row}>
          <a className={styles.feetbackBtn} href={'mailto:' + post.email}>Send a feetback</a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PostPage)
