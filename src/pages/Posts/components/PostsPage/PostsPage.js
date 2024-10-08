import React from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { useFetchPosts } from '../../../../hooks/useFetchPosts'
import { Spinner } from '../../../../components/Spinner';

import styles from './styles.module.scss';

const PostsPage = () => {
  const { posts, isLoading, errMesage } = useFetchPosts();
  const [selectedPost, setSelectedPost] = React.useState(null);
  const navigate = useNavigate();

  const getPostClasses = (postId) => cn(styles.row, styles.borderGray, styles.py2, {
    [styles.selected]: selectedPost === postId
  });

  const handleClick = (event, postId) => {
    setSelectedPost(postId);
    navigate(`/posts/${postId}`, { replace: true });
  }

  if (!posts.length && !isLoading) {
    return <div>There is not any available post</div>
  }

  return (
    <div className={styles.wrapper}>
      {errMesage && <div>{ errMesage }</div>}
      {isLoading && <Spinner />}
      <h1>Posts</h1>
      {posts.map(post =>
        <div key={ post.id } className={getPostClasses(post.id)} onClick={e => handleClick(e, post.id)}>
          <div className={styles.column}>
            <div className={styles.posttitle}>{ post.title }</div>
            <div className={styles.postbody}>{ post.body }</div>
          </div>
          <div className={styles.row}>
            <a className={styles.feedbackBtn} href={'mailto:' + post.email}>Send a feedback</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(PostsPage)
