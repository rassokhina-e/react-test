import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { increment } from './postState'
import type { RootState } from '../../../../store'

import { useFetchPost } from '../../../../hooks/useFetchPosts'
import { useFetchUsers } from '../../../../hooks/useFetchUsers'
import { useFetchPostComments } from '../../../../hooks/useFetchComments'
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

type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

const ArticleContext = React.createContext<Comment[]>([]);

const PostPage: React.FC<Props>= (props) => {
  const [user, setUser] = React.useState<User>();

  const [selectedCommentId, setSelectedComment] = React.useState<number|null>(null);

  const { postId } = useParams()
  const { post, isLoading } = useFetchPost(postId ? postId : props.postId);
  const { users } = useFetchUsers();
  const { comments } = useFetchPostComments(postId ? postId : props.postId);
  const [filteredComments, setComment] = React.useState<Comment[]>([]);

  const dispatch = useDispatch();
  const feedbackCounter = useSelector((state: RootState) => state.counterReducer.value)

  React.useEffect(() => {
    const [user] = users.filter((user: any) => {
        if (post !== undefined) {
            return user.id ===  post.userId as number
        } return user
    })
    setUser(user)
  }, [users, post, user, comments]);

  const getCommentClasses = (commentId: number) => cn(styles.row, styles.borderGray, styles.py2, {
    [styles.selected]: selectedCommentId === commentId
  });

  const getTopCommentClasses = (commentId: number) => cn(styles.row, styles.borderGray, styles.py2);

  const handleClick = (commentId: number) => {
    setSelectedComment(commentId)
    setComment(comments.filter(comment => comment.id === commentId))
  }

  if (isLoading) {
    return <Spinner />
  }

  if (!post && !isLoading) {
    return <div>Post is not available.</div>
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>Post #{ postId ? postId : props.postId }</h1>
        <div>feedback count: {feedbackCounter} </div>
        {post !== undefined && <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.posttitle}>{ post.title }</div>
            <div className={styles.postbody}>{ post.body }</div>
          </div>
          <div className={styles.row}>
            <button className={styles.feedbackBtn} onClick={() => dispatch(increment())}>Add feedback</button>
          </div>
        </div>}
      </div>
      <ArticleContext.Provider value={filteredComments}>
        <h1>*Top Comment*</h1>
        {!filteredComments.length && <div>Please select comment from the list!</div>}
        {filteredComments.map(comment =>
          <div key={ comment.id } className={getTopCommentClasses(comment.id)}>
            <div className={styles.column}>
              <div className={styles.posttitle}>{ comment.name }</div>
            </div>
          </div>
        )}
      </ArticleContext.Provider>
      <div className={styles.pt4}>
        {comments.map(comment =>
          <div key={ comment.id } className={getCommentClasses(comment.id)}>
            <div className={styles.column}>
              <div className={styles.posttitle}>{ comment.name }</div>
              <div className={styles.postbody}>{ comment.body }</div>
            </div>
            <div className={styles.row}>
              <button className={styles.feedbackBtn} onClick={() => handleClick(comment.id)}>Move comment to the top</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(PostPage)
